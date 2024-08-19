# TCPConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IPAddress** | Pointer to **string** | IP address of the interface server | [optional] 
**PortNumber** | Pointer to **string** | Logical Port assignment | [optional] 

## Methods

### NewTCPConfigType

`func NewTCPConfigType() *TCPConfigType`

NewTCPConfigType instantiates a new TCPConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTCPConfigTypeWithDefaults

`func NewTCPConfigTypeWithDefaults() *TCPConfigType`

NewTCPConfigTypeWithDefaults instantiates a new TCPConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIPAddress

`func (o *TCPConfigType) GetIPAddress() string`

GetIPAddress returns the IPAddress field if non-nil, zero value otherwise.

### GetIPAddressOk

`func (o *TCPConfigType) GetIPAddressOk() (*string, bool)`

GetIPAddressOk returns a tuple with the IPAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIPAddress

`func (o *TCPConfigType) SetIPAddress(v string)`

SetIPAddress sets IPAddress field to given value.

### HasIPAddress

`func (o *TCPConfigType) HasIPAddress() bool`

HasIPAddress returns a boolean if a field has been set.

### GetPortNumber

`func (o *TCPConfigType) GetPortNumber() string`

GetPortNumber returns the PortNumber field if non-nil, zero value otherwise.

### GetPortNumberOk

`func (o *TCPConfigType) GetPortNumberOk() (*string, bool)`

GetPortNumberOk returns a tuple with the PortNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortNumber

`func (o *TCPConfigType) SetPortNumber(v string)`

SetPortNumber sets PortNumber field to given value.

### HasPortNumber

`func (o *TCPConfigType) HasPortNumber() bool`

HasPortNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


