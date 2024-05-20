# ItemVendorType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | Pointer to **string** | The email address of the Vendor. | [optional] 
**Fax** | Pointer to **string** | The fax number of the Vendor. | [optional] 
**LeadTime** | Pointer to **string** | Lead time for ordering. | [optional] 
**Name** | Pointer to **string** | The Name of the vendor. | [optional] 
**Phone** | Pointer to **string** | The phone number of the Vendor. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Priority** | Pointer to **float32** | The Priority of the Vendor. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 

## Methods

### NewItemVendorType

`func NewItemVendorType() *ItemVendorType`

NewItemVendorType instantiates a new ItemVendorType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewItemVendorTypeWithDefaults

`func NewItemVendorTypeWithDefaults() *ItemVendorType`

NewItemVendorTypeWithDefaults instantiates a new ItemVendorType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *ItemVendorType) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ItemVendorType) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ItemVendorType) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ItemVendorType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetFax

`func (o *ItemVendorType) GetFax() string`

GetFax returns the Fax field if non-nil, zero value otherwise.

### GetFaxOk

`func (o *ItemVendorType) GetFaxOk() (*string, bool)`

GetFaxOk returns a tuple with the Fax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFax

`func (o *ItemVendorType) SetFax(v string)`

SetFax sets Fax field to given value.

### HasFax

`func (o *ItemVendorType) HasFax() bool`

HasFax returns a boolean if a field has been set.

### GetLeadTime

`func (o *ItemVendorType) GetLeadTime() string`

GetLeadTime returns the LeadTime field if non-nil, zero value otherwise.

### GetLeadTimeOk

`func (o *ItemVendorType) GetLeadTimeOk() (*string, bool)`

GetLeadTimeOk returns a tuple with the LeadTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeadTime

`func (o *ItemVendorType) SetLeadTime(v string)`

SetLeadTime sets LeadTime field to given value.

### HasLeadTime

`func (o *ItemVendorType) HasLeadTime() bool`

HasLeadTime returns a boolean if a field has been set.

### GetName

`func (o *ItemVendorType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ItemVendorType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ItemVendorType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ItemVendorType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPhone

`func (o *ItemVendorType) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *ItemVendorType) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *ItemVendorType) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *ItemVendorType) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### GetPrice

`func (o *ItemVendorType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ItemVendorType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ItemVendorType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *ItemVendorType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetPriority

`func (o *ItemVendorType) GetPriority() float32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *ItemVendorType) GetPriorityOk() (*float32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *ItemVendorType) SetPriority(v float32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *ItemVendorType) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetProfileId

`func (o *ItemVendorType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ItemVendorType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ItemVendorType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ItemVendorType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


