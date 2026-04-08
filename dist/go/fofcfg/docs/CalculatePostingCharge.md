# CalculatePostingCharge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code of the associated transaction code. | [optional] 
**TransactionCode** | Pointer to **string** | The associated transaction code of the posting. | [optional] 
**Description** | Pointer to **string** | Description of the transaction code. | [optional] 
**Level** | Pointer to [**GenerateLevelType**](GenerateLevelType.md) |  | [optional] 
**Amount** | Pointer to **float32** | The amount that will be posted against the transaction code. | [optional] 
**Formula** | Pointer to **string** | The formula that is used to calculate the generates. | [optional] 
**Bucket** | Pointer to [**PostingBucket**](PostingBucket.md) |  | [optional] 
**Sequence** | Pointer to **int32** | The order in which the charge will be posted. The base posting will always be 0 (zero) followed by generates associated in order of which they were created. | [optional] 
**BasePosting** | Pointer to **bool** | Indicates whether it is the base posting. | [optional] 

## Methods

### NewCalculatePostingCharge

`func NewCalculatePostingCharge() *CalculatePostingCharge`

NewCalculatePostingCharge instantiates a new CalculatePostingCharge object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalculatePostingChargeWithDefaults

`func NewCalculatePostingChargeWithDefaults() *CalculatePostingCharge`

NewCalculatePostingChargeWithDefaults instantiates a new CalculatePostingCharge object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CalculatePostingCharge) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CalculatePostingCharge) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CalculatePostingCharge) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CalculatePostingCharge) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTransactionCode

`func (o *CalculatePostingCharge) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *CalculatePostingCharge) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *CalculatePostingCharge) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *CalculatePostingCharge) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetDescription

`func (o *CalculatePostingCharge) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CalculatePostingCharge) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CalculatePostingCharge) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CalculatePostingCharge) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLevel

`func (o *CalculatePostingCharge) GetLevel() GenerateLevelType`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *CalculatePostingCharge) GetLevelOk() (*GenerateLevelType, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *CalculatePostingCharge) SetLevel(v GenerateLevelType)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *CalculatePostingCharge) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetAmount

`func (o *CalculatePostingCharge) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CalculatePostingCharge) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CalculatePostingCharge) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CalculatePostingCharge) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetFormula

`func (o *CalculatePostingCharge) GetFormula() string`

GetFormula returns the Formula field if non-nil, zero value otherwise.

### GetFormulaOk

`func (o *CalculatePostingCharge) GetFormulaOk() (*string, bool)`

GetFormulaOk returns a tuple with the Formula field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormula

`func (o *CalculatePostingCharge) SetFormula(v string)`

SetFormula sets Formula field to given value.

### HasFormula

`func (o *CalculatePostingCharge) HasFormula() bool`

HasFormula returns a boolean if a field has been set.

### GetBucket

`func (o *CalculatePostingCharge) GetBucket() PostingBucket`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *CalculatePostingCharge) GetBucketOk() (*PostingBucket, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *CalculatePostingCharge) SetBucket(v PostingBucket)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *CalculatePostingCharge) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### GetSequence

`func (o *CalculatePostingCharge) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *CalculatePostingCharge) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *CalculatePostingCharge) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *CalculatePostingCharge) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetBasePosting

`func (o *CalculatePostingCharge) GetBasePosting() bool`

GetBasePosting returns the BasePosting field if non-nil, zero value otherwise.

### GetBasePostingOk

`func (o *CalculatePostingCharge) GetBasePostingOk() (*bool, bool)`

GetBasePostingOk returns a tuple with the BasePosting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasePosting

`func (o *CalculatePostingCharge) SetBasePosting(v bool)`

SetBasePosting sets BasePosting field to given value.

### HasBasePosting

`func (o *CalculatePostingCharge) HasBasePosting() bool`

HasBasePosting returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


