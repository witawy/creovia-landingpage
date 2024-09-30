const StatBox = (stats) => {
    return(
        <div className="flex bg-opacity-surface-16 p-20 gap-28 rounded-2xl content-evenly">
            <div className="flex flex-col items-center">
            <p className="font-medium text-primary-600 text-6xl">{stats.users}</p>
            <p className="text-lg pt-2">Users</p>
            </div>
            <div className="flex flex-col items-center">
            <p className="font-medium text-primary-600 text-6xl">{stats.schools}</p>
            <p className="text-lg pt-2">Schools</p>
            </div>
            <div className="flex flex-col items-center">
            <p className="font-medium text-primary-600 text-6xl">{stats.students}</p>
            <p className="text-lg pt-2">Students</p>
            </div>
        </div>
    )
};

export default StatBox