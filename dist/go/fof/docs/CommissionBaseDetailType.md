# CommissionBaseDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CommissionCode** | Pointer to [**CommissionCodeType**](CommissionCodeType.md) |  | [optional] 
**CommissionAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CommissionTaxAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PrepaidCommissionAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Remarks** | Pointer to **string** | Remarks for the commission record. | [optional] 

## Methods

### NewCommissionBaseDetailType

`func NewCommissionBaseDetailType() *CommissionBaseDetailType`

NewCommissionBaseDetailType instantiates a new CommissionBaseDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionBaseDetailTypeWithDefaults

`func NewCommissionBaseDetailTypeWithDefaults() *CommissionBaseDetailType`

NewCommissionBaseDetailTypeWithDefaults instantiates a new CommissionBaseDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionId

`func (o *CommissionBaseDetailType) GetCommissionId() UniqueIDType`

GetCommissionId returns the CommissionId field if non-nil, zero value otherwise.

### GetCommissionIdOk

`func (o *CommissionBaseDetailType) GetCommissionIdOk() (*UniqueIDType, bool)`

GetCommissionIdOk returns a tuple with the CommissionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionId

`func (o *CommissionBaseDetailType) SetCommissionId(v UniqueIDType)`

SetCommissionId sets CommissionId field to given value.

### HasCommissionId

`func (o *CommissionBaseDetailType) HasCommissionId() bool`

HasCommissionId returns a boolean if a field has been set.

### GetCommissionCode

`func (o *CommissionBaseDetailType) GetCommissionCode() CommissionCodeType`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *CommissionBaseDetailType) GetCommissionCodeOk() (*CommissionCodeType, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *CommissionBaseDetailType) SetCommissionCode(v CommissionCodeType)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *CommissionBaseDetailType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetCommissionAmount

`func (o *CommissionBaseDetailType) GetCommissionAmount() CurrencyAmountType`

GetCommissionAmount returns the CommissionAmount field if non-nil, zero value otherwise.

### GetCommissionAmountOk

`func (o *CommissionBaseDetailType) GetCommissionAmountOk() (*CurrencyAmountType, bool)`

GetCommissionAmountOk returns a tuple with the CommissionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionAmount

`func (o *CommissionBaseDetailType) SetCommissionAmount(v CurrencyAmountType)`

SetCommissionAmount sets CommissionAmount field to given value.

### HasCommissionAmount

`func (o *CommissionBaseDetailType) HasCommissionAmount() bool`

HasCommissionAmount returns a boolean if a field has been set.

### GetCommissionTaxAmount

`func (o *CommissionBaseDetailType) GetCommissionTaxAmount() CurrencyAmountType`

GetCommissionTaxAmount returns the CommissionTaxAmount field if non-nil, zero value otherwise.

### GetCommissionTaxAmountOk

`func (o *CommissionBaseDetailType) GetCommissionTaxAmountOk() (*CurrencyAmountType, bool)`

GetCommissionTaxAmountOk returns a tuple with the CommissionTaxAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionTaxAmount

`func (o *CommissionBaseDetailType) SetCommissionTaxAmount(v CurrencyAmountType)`

SetCommissionTaxAmount sets CommissionTaxAmount field to given value.

### HasCommissionTaxAmount

`func (o *CommissionBaseDetailType) HasCommissionTaxAmount() bool`

HasCommissionTaxAmount returns a boolean if a field has been set.

### GetPrepaidCommissionAmount

`func (o *CommissionBaseDetailType) GetPrepaidCommissionAmount() CurrencyAmountType`

GetPrepaidCommissionAmount returns the PrepaidCommissionAmount field if non-nil, zero value otherwise.

### GetPrepaidCommissionAmountOk

`func (o *CommissionBaseDetailType) GetPrepaidCommissionAmountOk() (*CurrencyAmountType, bool)`

GetPrepaidCommissionAmountOk returns a tuple with the PrepaidCommissionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaidCommissionAmount

`func (o *CommissionBaseDetailType) SetPrepaidCommissionAmount(v CurrencyAmountType)`

SetPrepaidCommissionAmount sets PrepaidCommissionAmount field to given value.

### HasPrepaidCommissionAmount

`func (o *CommissionBaseDetailType) HasPrepaidCommissionAmount() bool`

HasPrepaidCommissionAmount returns a boolean if a field has been set.

### GetRemarks

`func (o *CommissionBaseDetailType) GetRemarks() string`

GetRemarks returns the Remarks field if non-nil, zero value otherwise.

### GetRemarksOk

`func (o *CommissionBaseDetailType) GetRemarksOk() (*string, bool)`

GetRemarksOk returns a tuple with the Remarks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemarks

`func (o *CommissionBaseDetailType) SetRemarks(v string)`

SetRemarks sets Remarks field to given value.

### HasRemarks

`func (o *CommissionBaseDetailType) HasRemarks() bool`

HasRemarks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


