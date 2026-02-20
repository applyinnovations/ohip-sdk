# NextBlockStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockNextStatusList** | Pointer to [**[]BookingStatusDetailType**](BookingStatusDetailType.md) | Next booking status of the business block. | [optional] 
**CateringNextStatusList** | Pointer to [**[]BookingStatusDetailType**](BookingStatusDetailType.md) | Next catering status of the business block. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewNextBlockStatus

`func NewNextBlockStatus() *NextBlockStatus`

NewNextBlockStatus instantiates a new NextBlockStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNextBlockStatusWithDefaults

`func NewNextBlockStatusWithDefaults() *NextBlockStatus`

NewNextBlockStatusWithDefaults instantiates a new NextBlockStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockNextStatusList

`func (o *NextBlockStatus) GetBlockNextStatusList() []BookingStatusDetailType`

GetBlockNextStatusList returns the BlockNextStatusList field if non-nil, zero value otherwise.

### GetBlockNextStatusListOk

`func (o *NextBlockStatus) GetBlockNextStatusListOk() (*[]BookingStatusDetailType, bool)`

GetBlockNextStatusListOk returns a tuple with the BlockNextStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockNextStatusList

`func (o *NextBlockStatus) SetBlockNextStatusList(v []BookingStatusDetailType)`

SetBlockNextStatusList sets BlockNextStatusList field to given value.

### HasBlockNextStatusList

`func (o *NextBlockStatus) HasBlockNextStatusList() bool`

HasBlockNextStatusList returns a boolean if a field has been set.

### GetCateringNextStatusList

`func (o *NextBlockStatus) GetCateringNextStatusList() []BookingStatusDetailType`

GetCateringNextStatusList returns the CateringNextStatusList field if non-nil, zero value otherwise.

### GetCateringNextStatusListOk

`func (o *NextBlockStatus) GetCateringNextStatusListOk() (*[]BookingStatusDetailType, bool)`

GetCateringNextStatusListOk returns a tuple with the CateringNextStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringNextStatusList

`func (o *NextBlockStatus) SetCateringNextStatusList(v []BookingStatusDetailType)`

SetCateringNextStatusList sets CateringNextStatusList field to given value.

### HasCateringNextStatusList

`func (o *NextBlockStatus) HasCateringNextStatusList() bool`

HasCateringNextStatusList returns a boolean if a field has been set.

### GetLinks

`func (o *NextBlockStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *NextBlockStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *NextBlockStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *NextBlockStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *NextBlockStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *NextBlockStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *NextBlockStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *NextBlockStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


