# VouchersDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VouchersInfoType** | Pointer to [**[]VoucherType**](VoucherType.md) | List of Vouchers. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewVouchersDetails

`func NewVouchersDetails() *VouchersDetails`

NewVouchersDetails instantiates a new VouchersDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVouchersDetailsWithDefaults

`func NewVouchersDetailsWithDefaults() *VouchersDetails`

NewVouchersDetailsWithDefaults instantiates a new VouchersDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVouchersInfoType

`func (o *VouchersDetails) GetVouchersInfoType() []VoucherType`

GetVouchersInfoType returns the VouchersInfoType field if non-nil, zero value otherwise.

### GetVouchersInfoTypeOk

`func (o *VouchersDetails) GetVouchersInfoTypeOk() (*[]VoucherType, bool)`

GetVouchersInfoTypeOk returns a tuple with the VouchersInfoType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVouchersInfoType

`func (o *VouchersDetails) SetVouchersInfoType(v []VoucherType)`

SetVouchersInfoType sets VouchersInfoType field to given value.

### HasVouchersInfoType

`func (o *VouchersDetails) HasVouchersInfoType() bool`

HasVouchersInfoType returns a boolean if a field has been set.

### GetLinks

`func (o *VouchersDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *VouchersDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *VouchersDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *VouchersDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *VouchersDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *VouchersDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *VouchersDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *VouchersDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


