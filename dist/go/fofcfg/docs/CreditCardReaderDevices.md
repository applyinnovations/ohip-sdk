# CreditCardReaderDevices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Devices** | Pointer to [**[]CreditCardReaderDevicesType**](CreditCardReaderDevicesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreditCardReaderDevices

`func NewCreditCardReaderDevices() *CreditCardReaderDevices`

NewCreditCardReaderDevices instantiates a new CreditCardReaderDevices object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditCardReaderDevicesWithDefaults

`func NewCreditCardReaderDevicesWithDefaults() *CreditCardReaderDevices`

NewCreditCardReaderDevicesWithDefaults instantiates a new CreditCardReaderDevices object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDevices

`func (o *CreditCardReaderDevices) GetDevices() []CreditCardReaderDevicesType`

GetDevices returns the Devices field if non-nil, zero value otherwise.

### GetDevicesOk

`func (o *CreditCardReaderDevices) GetDevicesOk() (*[]CreditCardReaderDevicesType, bool)`

GetDevicesOk returns a tuple with the Devices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevices

`func (o *CreditCardReaderDevices) SetDevices(v []CreditCardReaderDevicesType)`

SetDevices sets Devices field to given value.

### HasDevices

`func (o *CreditCardReaderDevices) HasDevices() bool`

HasDevices returns a boolean if a field has been set.

### GetLinks

`func (o *CreditCardReaderDevices) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreditCardReaderDevices) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreditCardReaderDevices) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreditCardReaderDevices) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreditCardReaderDevices) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreditCardReaderDevices) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreditCardReaderDevices) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreditCardReaderDevices) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


