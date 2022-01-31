import User from "../models/user";

// POST new user => /api/register
const registerUser = async (req, res)=>{

    let { name, email, password } = req.body;
    const uid = Date.now().toString();
   
    try{
        const user = await User.create({ name, email, password }); 
        res.status(200).json({ success: true, user });
     }
     catch(e){
        res.status(400).json({ success: false, message: e.message });
     }
}

// Get allUsers  =>  /api/admin/users
const allAdminUsers = async (req, res) => {

    const users = await User.find();
    res.status(200).json({ success: true, users })
}

// Get user details  =>   /api/admin/users/:id
const getUserDetails = async (req, res) => {

    const user = await User.findById(req.query.id);

    if (!user) {
        res.status(400).json({
            success: false,
            message: 'User not found with this ID'
        })
        //return next(new ErrorHandler('User not found with this ID.', 400))
    }
    res.status(200).json({ success: true, user })
}

// Update user details  =>   /api/admin/users/:id
const updateUser = async (req, res) => {

    const { origin } = absoluteUrl(req);
    const uid = Date.now().toString();
    let { id, name, email, role } = req.body;
    let newUserData = { name: name, email: email, role: role }

    try{
        const user = await User.findByIdAndUpdate(req.query.id, newUserData, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        res.status(200).json({ success: true })

    }catch(e){
        res.status(400).json({ success: false, message: e.message });
    }
}
// Delete user    =>   /api/admin/users/:id
const deleteUser = async (req, res) => {

    const user = await User.findById(req.query.id);

    if (!user) {
        res.status(400).json({
            success: false,
            message: 'User not found with this ID'
        })
        //return next(new ErrorHandler('User not found with this ID.', 400))
    }

    await user.remove();
    res.status(200).json({ success: true, user })
}

export{ registerUser, allAdminUsers, getUserDetails, updateUser, deleteUser };