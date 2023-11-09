# ReprintCommissionCheckRangeCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowExistingCheckNo** | Pointer to **bool** | Set to true if an existing check number can be used as the starting check number for reprint. | [optional] 
**BankAccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**BatchId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CheckRange** | Pointer to [**NumberRangeType**](NumberRangeType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property of the commission record. | [optional] 
**StartCheckNo** | Pointer to **float32** | Start check no of commission to be applied to the set. | [optional] 

## Methods

### NewReprintCommissionCheckRangeCriteriaType

`func NewReprintCommissionCheckRangeCriteriaType() *ReprintCommissionCheckRangeCriteriaType`

NewReprintCommissionCheckRangeCriteriaType instantiates a new ReprintCommissionCheckRangeCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReprintCommissionCheckRangeCriteriaTypeWithDefaults

`func NewReprintCommissionCheckRangeCriteriaTypeWithDefaults() *ReprintCommissionCheckRangeCriteriaType`

NewReprintCommissionCheckRangeCriteriaTypeWithDefaults instantiates a new ReprintCommissionCheckRangeCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowExistingCheckNo

`func (o *ReprintCommissionCheckRangeCriteriaType) GetAllowExistingCheckNo() bool`

GetAllowExistingCheckNo returns the AllowExistingCheckNo field if non-nil, zero value otherwise.

### GetAllowExistingCheckNoOk

`func (o *ReprintCommissionCheckRangeCriteriaType) GetAllowExistingCheckNoOk() (*bool, bool)`

GetAllowExistingCheckNoOk returns a tuple with the AllowExistingCheckNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowExistingCheckNo

`func (o *ReprintCommissionCheckRangeCriteriaType) SetAllowExistingCheckNo(v bool)`

SetAllowExistingCheckNo sets AllowExistingCheckNo field to given value.

### HasAllowExistingCheckNo

`func (o *ReprintCommissionCheckRangeCriteriaType) HasAllowExistingCheckNo() bool`

HasAllowExistingCheckNo returns a boolean if a field has been set.

### GetBankAccountId

`func (o *ReprintCommissionCheckRangeCriteriaType) GetBankAccountId() UniqueIDType`

GetBankAccountId returns the BankAccountId field if non-nil, zero value otherwise.

### GetBankAccountIdOk

`func (o *ReprintCommissionCheckRangeCriteriaType) GetBankAccountIdOk() (*UniqueIDType, bool)`

GetBankAccountIdOk returns a tuple with the BankAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccountId

`func (o *ReprintCommissionCheckRangeCriteriaType) SetBankAccountId(v UniqueIDType)`

SetBankAccountId sets BankAccountId field to given value.

### HasBankAccountId

`func (o *ReprintCommissionCheckRangeCriteriaType) HasBankAccountId() bool`

HasBankAccountId returns a boolean if a field has been set.

### GetBatchId

`func (o *ReprintCommissionCheckRangeCriteriaType) GetBatchId() UniqueIDType`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *ReprintCommissionCheckRangeCriteriaType) GetBatchIdOk() (*UniqueIDType, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *ReprintCommissionCheckRangeCriteriaType) SetBatchId(v UniqueIDType)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *ReprintCommissionCheckRangeCriteriaType) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.

### GetCheckRange

`func (o *ReprintCommissionCheckRangeCriteriaType) GetCheckRange() NumberRangeType`

GetCheckRange returns the CheckRange field if non-nil, zero value otherwise.

### GetCheckRangeOk

`func (o *ReprintCommissionCheckRangeCriteriaType) GetCheckRangeOk() (*NumberRangeType, bool)`

GetCheckRangeOk returns a tuple with the CheckRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckRange

`func (o *ReprintCommissionCheckRangeCriteriaType) SetCheckRange(v NumberRangeType)`

SetCheckRange sets CheckRange field to given value.

### HasCheckRange

`func (o *ReprintCommissionCheckRangeCriteriaType) HasCheckRange() bool`

HasCheckRange returns a boolean if a field has been set.

### GetHotelId

`func (o *ReprintCommissionCheckRangeCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReprintCommissionCheckRangeCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReprintCommissionCheckRangeCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReprintCommissionCheckRangeCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetStartCheckNo

`func (o *ReprintCommissionCheckRangeCriteriaType) GetStartCheckNo() float32`

GetStartCheckNo returns the StartCheckNo field if non-nil, zero value otherwise.

### GetStartCheckNoOk

`func (o *ReprintCommissionCheckRangeCriteriaType) GetStartCheckNoOk() (*float32, bool)`

GetStartCheckNoOk returns a tuple with the StartCheckNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartCheckNo

`func (o *ReprintCommissionCheckRangeCriteriaType) SetStartCheckNo(v float32)`

SetStartCheckNo sets StartCheckNo field to given value.

### HasStartCheckNo

`func (o *ReprintCommissionCheckRangeCriteriaType) HasStartCheckNo() bool`

HasStartCheckNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


