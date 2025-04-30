# DeliveryHistoryLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeliveryHistoryLog** | Pointer to [**[]DeliveryHistoryType**](DeliveryHistoryType.md) | Delivery History Information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDeliveryHistoryLog

`func NewDeliveryHistoryLog() *DeliveryHistoryLog`

NewDeliveryHistoryLog instantiates a new DeliveryHistoryLog object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeliveryHistoryLogWithDefaults

`func NewDeliveryHistoryLogWithDefaults() *DeliveryHistoryLog`

NewDeliveryHistoryLogWithDefaults instantiates a new DeliveryHistoryLog object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeliveryHistoryLog

`func (o *DeliveryHistoryLog) GetDeliveryHistoryLog() []DeliveryHistoryType`

GetDeliveryHistoryLog returns the DeliveryHistoryLog field if non-nil, zero value otherwise.

### GetDeliveryHistoryLogOk

`func (o *DeliveryHistoryLog) GetDeliveryHistoryLogOk() (*[]DeliveryHistoryType, bool)`

GetDeliveryHistoryLogOk returns a tuple with the DeliveryHistoryLog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryHistoryLog

`func (o *DeliveryHistoryLog) SetDeliveryHistoryLog(v []DeliveryHistoryType)`

SetDeliveryHistoryLog sets DeliveryHistoryLog field to given value.

### HasDeliveryHistoryLog

`func (o *DeliveryHistoryLog) HasDeliveryHistoryLog() bool`

HasDeliveryHistoryLog returns a boolean if a field has been set.

### GetLinks

`func (o *DeliveryHistoryLog) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DeliveryHistoryLog) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DeliveryHistoryLog) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DeliveryHistoryLog) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DeliveryHistoryLog) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DeliveryHistoryLog) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DeliveryHistoryLog) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DeliveryHistoryLog) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


