# RecalculateCommissionOnCodeChangeStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionDetail** | Pointer to [**CommissionDetailType**](CommissionDetailType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRecalculateCommissionOnCodeChangeStatus

`func NewRecalculateCommissionOnCodeChangeStatus() *RecalculateCommissionOnCodeChangeStatus`

NewRecalculateCommissionOnCodeChangeStatus instantiates a new RecalculateCommissionOnCodeChangeStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRecalculateCommissionOnCodeChangeStatusWithDefaults

`func NewRecalculateCommissionOnCodeChangeStatusWithDefaults() *RecalculateCommissionOnCodeChangeStatus`

NewRecalculateCommissionOnCodeChangeStatusWithDefaults instantiates a new RecalculateCommissionOnCodeChangeStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionDetail

`func (o *RecalculateCommissionOnCodeChangeStatus) GetCommissionDetail() CommissionDetailType`

GetCommissionDetail returns the CommissionDetail field if non-nil, zero value otherwise.

### GetCommissionDetailOk

`func (o *RecalculateCommissionOnCodeChangeStatus) GetCommissionDetailOk() (*CommissionDetailType, bool)`

GetCommissionDetailOk returns a tuple with the CommissionDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionDetail

`func (o *RecalculateCommissionOnCodeChangeStatus) SetCommissionDetail(v CommissionDetailType)`

SetCommissionDetail sets CommissionDetail field to given value.

### HasCommissionDetail

`func (o *RecalculateCommissionOnCodeChangeStatus) HasCommissionDetail() bool`

HasCommissionDetail returns a boolean if a field has been set.

### GetLinks

`func (o *RecalculateCommissionOnCodeChangeStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RecalculateCommissionOnCodeChangeStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RecalculateCommissionOnCodeChangeStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RecalculateCommissionOnCodeChangeStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RecalculateCommissionOnCodeChangeStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RecalculateCommissionOnCodeChangeStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RecalculateCommissionOnCodeChangeStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RecalculateCommissionOnCodeChangeStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


