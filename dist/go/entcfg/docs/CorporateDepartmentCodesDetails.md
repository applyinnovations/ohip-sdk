# CorporateDepartmentCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CorporateDepartmentCodes** | Pointer to [**[]CorporateDepartmentCodeType**](CorporateDepartmentCodeType.md) | List of Corporate Department Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCorporateDepartmentCodesDetails

`func NewCorporateDepartmentCodesDetails() *CorporateDepartmentCodesDetails`

NewCorporateDepartmentCodesDetails instantiates a new CorporateDepartmentCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorporateDepartmentCodesDetailsWithDefaults

`func NewCorporateDepartmentCodesDetailsWithDefaults() *CorporateDepartmentCodesDetails`

NewCorporateDepartmentCodesDetailsWithDefaults instantiates a new CorporateDepartmentCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCorporateDepartmentCodes

`func (o *CorporateDepartmentCodesDetails) GetCorporateDepartmentCodes() []CorporateDepartmentCodeType`

GetCorporateDepartmentCodes returns the CorporateDepartmentCodes field if non-nil, zero value otherwise.

### GetCorporateDepartmentCodesOk

`func (o *CorporateDepartmentCodesDetails) GetCorporateDepartmentCodesOk() (*[]CorporateDepartmentCodeType, bool)`

GetCorporateDepartmentCodesOk returns a tuple with the CorporateDepartmentCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorporateDepartmentCodes

`func (o *CorporateDepartmentCodesDetails) SetCorporateDepartmentCodes(v []CorporateDepartmentCodeType)`

SetCorporateDepartmentCodes sets CorporateDepartmentCodes field to given value.

### HasCorporateDepartmentCodes

`func (o *CorporateDepartmentCodesDetails) HasCorporateDepartmentCodes() bool`

HasCorporateDepartmentCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CorporateDepartmentCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CorporateDepartmentCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CorporateDepartmentCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CorporateDepartmentCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CorporateDepartmentCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CorporateDepartmentCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CorporateDepartmentCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CorporateDepartmentCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


