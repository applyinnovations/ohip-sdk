# CustomerType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PersonName** | Pointer to [**[]PersonNameType**](PersonNameType.md) | Detailed name information for the customer. | [optional] 
**GenderCode** | Pointer to **string** | Identifies the profile gender code based from configured gender list of values. | [optional] 
**VipStatus** | Pointer to **string** | VIP status of the customer. | [optional] 
**VipDescription** | Pointer to **string** | Description of the VIP status. | [optional] 

## Methods

### NewCustomerType

`func NewCustomerType() *CustomerType`

NewCustomerType instantiates a new CustomerType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerTypeWithDefaults

`func NewCustomerTypeWithDefaults() *CustomerType`

NewCustomerTypeWithDefaults instantiates a new CustomerType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPersonName

`func (o *CustomerType) GetPersonName() []PersonNameType`

GetPersonName returns the PersonName field if non-nil, zero value otherwise.

### GetPersonNameOk

`func (o *CustomerType) GetPersonNameOk() (*[]PersonNameType, bool)`

GetPersonNameOk returns a tuple with the PersonName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonName

`func (o *CustomerType) SetPersonName(v []PersonNameType)`

SetPersonName sets PersonName field to given value.

### HasPersonName

`func (o *CustomerType) HasPersonName() bool`

HasPersonName returns a boolean if a field has been set.

### GetGenderCode

`func (o *CustomerType) GetGenderCode() string`

GetGenderCode returns the GenderCode field if non-nil, zero value otherwise.

### GetGenderCodeOk

`func (o *CustomerType) GetGenderCodeOk() (*string, bool)`

GetGenderCodeOk returns a tuple with the GenderCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenderCode

`func (o *CustomerType) SetGenderCode(v string)`

SetGenderCode sets GenderCode field to given value.

### HasGenderCode

`func (o *CustomerType) HasGenderCode() bool`

HasGenderCode returns a boolean if a field has been set.

### GetVipStatus

`func (o *CustomerType) GetVipStatus() string`

GetVipStatus returns the VipStatus field if non-nil, zero value otherwise.

### GetVipStatusOk

`func (o *CustomerType) GetVipStatusOk() (*string, bool)`

GetVipStatusOk returns a tuple with the VipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipStatus

`func (o *CustomerType) SetVipStatus(v string)`

SetVipStatus sets VipStatus field to given value.

### HasVipStatus

`func (o *CustomerType) HasVipStatus() bool`

HasVipStatus returns a boolean if a field has been set.

### GetVipDescription

`func (o *CustomerType) GetVipDescription() string`

GetVipDescription returns the VipDescription field if non-nil, zero value otherwise.

### GetVipDescriptionOk

`func (o *CustomerType) GetVipDescriptionOk() (*string, bool)`

GetVipDescriptionOk returns a tuple with the VipDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipDescription

`func (o *CustomerType) SetVipDescription(v string)`

SetVipDescription sets VipDescription field to given value.

### HasVipDescription

`func (o *CustomerType) HasVipDescription() bool`

HasVipDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


