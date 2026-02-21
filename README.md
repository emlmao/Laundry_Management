# Laundry Management System

A comprehensive web-based application for managing laundry operations, built with React and Firebase.

## 🌟 Features

### 📝 Laundry Entry Management
- **New Entry Creation**: Add customer information, select machines, and track pricing
- **Customer Auto-Complete**: Smart suggestions based on previous customer data
- **Machine Selection**: Interactive washer/dryer selection with individual pricing
- **Status Tracking**: Multi-stage workflow (Pending → Washing → Drying → Folding → Done → Picked Up)
- **Automatic Pricing**: Real-time price calculation based on selected washers

### 📊 Records & History
- **Comprehensive Records View**: Display all laundry entries with full details
- **Search Functionality**: Search by customer name, phone, status, or machine numbers
- **Advanced Filtering**: Filter records by status (Pending, Washing, Done, etc.)
- **Sortable Columns**:
  - **Date & Time**: Toggle between newest/oldest first
  - **Status**: Sort by workflow order (Pending → Picked Up or reverse)
- **Data Export**: Download records as CSV for external analysis
- **Edit & Delete**: Modify or remove existing entries

### 🔧 Admin Panel
**Password Protected** (Access: `helloworld123`)

#### Machine Configuration
- **Washer Management**: Add/remove washers with custom pricing
- **Dryer Management**: Add/remove dryers as needed
- **Price Editing**: Live pricing updates with immediate synchronization
- **Bulk Operations**: Select multiple machines for deletion

#### Employee Management
- **Employee Database**: Add/remove team members
- **Assignment Tracking**: Link entries to specific employees

#### Customer Database
- **Automatic Population**: New customers added automatically from entries
- **Search & Filter**: Find customers quickly by name or phone
- **Manual Management**: Add, edit, or delete customer records
- **Duplicate Cleanup**: Built-in tool to remove duplicate entries
- **Alphabetical Sorting**: Customers displayed in organized order

### 🔄 Real-Time Features
- **Live Data Sync**: All changes update across devices instantly
- **Firebase Integration**: Reliable cloud storage and synchronization
- **Auto-Save**: No data loss with automatic saving
- **SMS Notifications**: Ready for integration (placeholder implementation)

## 🛠 Technology Stack

- **Frontend**: React 18, HTML5, Tailwind CSS
- **Backend**: Firebase Realtime Database
- **Authentication**: Simple password protection for admin features
- **Data Export**: CSV generation for record keeping

## 🚀 Key Workflows

### Daily Operations
1. **Receive Customer**: Enter customer details and select machines
2. **Track Progress**: Update status as laundry moves through workflow
3. **Complete Service**: Mark as "Done" and notify customer
4. **Record Pickup**: Mark as "Picked Up" when customer collects

### Administrative Tasks
- **Manage Pricing**: Update washer prices as needed
- **Staff Management**: Add/remove employees
- **Customer Relations**: Maintain customer database
- **Reporting**: Export data for business analysis

## 📱 User Interface

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Intuitive Navigation**: Three main tabs (Entry, Records, Admin)
- **Visual Status Indicators**: Color-coded status badges for quick reference
- **Interactive Elements**: Clickable headers for sorting, hover effects

## 🔐 Security Features

- **Admin Protection**: Password-required access to configuration
- **Data Validation**: Input validation prevents invalid entries
- **Error Handling**: Graceful error management with user feedback

## 📈 Business Benefits

- **Efficiency**: Streamlined workflow reduces processing time
- **Accuracy**: Automatic calculations prevent pricing errors
- **Organization**: Centralized customer and machine data
- **Reporting**: Data export capabilities for business analysis
- **Scalability**: Easy to add machines and employees as business grows

---

*Built for laundromat operations to improve efficiency and customer service.*