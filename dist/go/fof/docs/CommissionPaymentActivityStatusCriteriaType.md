# CommissionPaymentActivityStatusCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to [**CommissionPaymentActivityStatusType**](CommissionPaymentActivityStatusType.md) |  | [optional] 
**StatusDate** | Pointer to **string** | Date applied when new status is applied. Used in Unpresented and Reconcile. | [optional] 

## Methods

### NewCommissionPaymentActivityStatusCriteriaType

`func NewCommissionPaymentActivityStatusCriteriaType() *CommissionPaymentActivityStatusCriteriaType`

NewCommissionPaymentActivityStatusCriteriaType instantiates a new CommissionPaymentActivityStatusCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionPaymentActivityStatusCriteriaTypeWithDefaults

`func NewCommissionPaymentActivityStatusCriteriaTypeWithDefaults() *CommissionPaymentActivityStatusCriteriaType`

NewCommissionPaymentActivityStatusCriteriaTypeWithDefaults instantiates a new CommissionPaymentActivityStatusCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *CommissionPaymentActivityStatusCriteriaType) GetStatus() CommissionPaymentActivityStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CommissionPaymentActivityStatusCriteriaType) GetStatusOk() (*CommissionPaymentActivityStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CommissionPaymentActivityStatusCriteriaType) SetStatus(v CommissionPaymentActivityStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CommissionPaymentActivityStatusCriteriaType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStatusDate

`func (o *CommissionPaymentActivityStatusCriteriaType) GetStatusDate() string`

GetStatusDate returns the StatusDate field if non-nil, zero value otherwise.

### GetStatusDateOk

`func (o *CommissionPaymentActivityStatusCriteriaType) GetStatusDateOk() (*string, bool)`

GetStatusDateOk returns a tuple with the StatusDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusDate

`func (o *CommissionPaymentActivityStatusCriteriaType) SetStatusDate(v string)`

SetStatusDate sets StatusDate field to given value.

### HasStatusDate

`func (o *CommissionPaymentActivityStatusCriteriaType) HasStatusDate() bool`

HasStatusDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


