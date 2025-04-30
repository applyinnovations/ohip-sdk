# CommissionCodeDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionCodeDetail** | Pointer to [**CommissionCodeDetailType**](CommissionCodeDetailType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCommissionCodeDetail

`func NewCommissionCodeDetail() *CommissionCodeDetail`

NewCommissionCodeDetail instantiates a new CommissionCodeDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionCodeDetailWithDefaults

`func NewCommissionCodeDetailWithDefaults() *CommissionCodeDetail`

NewCommissionCodeDetailWithDefaults instantiates a new CommissionCodeDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionCodeDetail

`func (o *CommissionCodeDetail) GetCommissionCodeDetail() CommissionCodeDetailType`

GetCommissionCodeDetail returns the CommissionCodeDetail field if non-nil, zero value otherwise.

### GetCommissionCodeDetailOk

`func (o *CommissionCodeDetail) GetCommissionCodeDetailOk() (*CommissionCodeDetailType, bool)`

GetCommissionCodeDetailOk returns a tuple with the CommissionCodeDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCodeDetail

`func (o *CommissionCodeDetail) SetCommissionCodeDetail(v CommissionCodeDetailType)`

SetCommissionCodeDetail sets CommissionCodeDetail field to given value.

### HasCommissionCodeDetail

`func (o *CommissionCodeDetail) HasCommissionCodeDetail() bool`

HasCommissionCodeDetail returns a boolean if a field has been set.

### GetLinks

`func (o *CommissionCodeDetail) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CommissionCodeDetail) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CommissionCodeDetail) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CommissionCodeDetail) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CommissionCodeDetail) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CommissionCodeDetail) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CommissionCodeDetail) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CommissionCodeDetail) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


