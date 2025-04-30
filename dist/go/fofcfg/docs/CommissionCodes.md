# CommissionCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionCodes** | Pointer to [**[]CommissionCodeInfoType**](CommissionCodeInfoType.md) | Commission code details object. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCommissionCodes

`func NewCommissionCodes() *CommissionCodes`

NewCommissionCodes instantiates a new CommissionCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionCodesWithDefaults

`func NewCommissionCodesWithDefaults() *CommissionCodes`

NewCommissionCodesWithDefaults instantiates a new CommissionCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionCodes

`func (o *CommissionCodes) GetCommissionCodes() []CommissionCodeInfoType`

GetCommissionCodes returns the CommissionCodes field if non-nil, zero value otherwise.

### GetCommissionCodesOk

`func (o *CommissionCodes) GetCommissionCodesOk() (*[]CommissionCodeInfoType, bool)`

GetCommissionCodesOk returns a tuple with the CommissionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCodes

`func (o *CommissionCodes) SetCommissionCodes(v []CommissionCodeInfoType)`

SetCommissionCodes sets CommissionCodes field to given value.

### HasCommissionCodes

`func (o *CommissionCodes) HasCommissionCodes() bool`

HasCommissionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CommissionCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CommissionCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CommissionCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CommissionCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CommissionCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CommissionCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CommissionCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CommissionCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


