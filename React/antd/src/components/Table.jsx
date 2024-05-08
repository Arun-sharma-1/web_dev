import React from 'react'
import { Input, Table } from 'antd';
function TableView() {
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            description: 'My name is John Brown, I am 32 years old, living in Sydney No. 1 Lake Park.',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            description: 'My name is Jim Green, I am 32 years old, living in Sydney No. 1 Lake Park.',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
            description: 'My name is Jim Red, I am 32 years old, living in Sydney No. 1 Lake Park.',
        },
    ];

    const columns = [
        {
            title: 'Name',
            // dataIndex: 'name',
            render: (record) => (record.name),
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
            ],
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,

        },
        {
            title: 'Address',
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
    ]
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const data2 = [
        {
            name: '',
            count: 4,
            tag: 'designer',
        }, {
            name: '',
            count: 5,
            tag: 'developer',
        }, {
            name: '',
            count: 2,
            tag: 'designer',
        },
    ]
    const column2 = [
        {
            name: '',
            dataIndex: "count",
            sorter: (a, b) => a.count - b.count,
            tag: 'developer'
        },
        {
            name: '',
            tag: 'designer',
            dataIndex:'tag',
            filters: [
                {
                    text: 'developer',
                    value: 'developer',
                },
                {
                    text: 'designer',
                    value: 'designer'
                }
            ],
            onFilter: (value, record) => (record.tag.indexOf(value) === 0),
        }
    ]
    return (
        <div style={{ display: "flex" }}>
            <Input type='search for user' style={{ width: "30%" }} />
            <Table
                pagination={false}
                columns={column2} dataSource={data2} onChange={onChange} />
            {/* <Table
                columns={column} dataSource={data} onChange={onChange} expandable={{
                    expandedRowRender: (record) => (
                        <p>{record.description}</p>
                    ),
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }} /> */}
        </div>
    )
}

export default TableView
