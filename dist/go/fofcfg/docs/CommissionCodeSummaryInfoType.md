# CommissionCodeSummaryInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property of the commission codes. | [optional] 
**CommissionCode** | Pointer to **string** | Commission code details. | [optional] 
**Description** | Pointer to **string** | Commission code description for which details are fetched. | [optional] 
**Sequence** | Pointer to **int32** | Commission code sequence number. | [optional] 
**BasedOn** | Pointer to [**CommissionBasedOnType**](CommissionBasedOnType.md) |  | [optional] 
**CommissionAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TaxPercentage** | Pointer to **float32** | Commission paid Tax details. | [optional] 
**Default** | Pointer to **bool** |  | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewCommissionCodeSummaryInfoType

`func NewCommissionCodeSummaryInfoType() *CommissionCodeSummaryInfoType`

NewCommissionCodeSummaryInfoType instantiates a new CommissionCodeSummaryInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionCodeSummaryInfoTypeWithDefaults

`func NewCommissionCodeSummaryInfoTypeWithDefaults() *CommissionCodeSummaryInfoType`

NewCommissionCodeSummaryInfoTypeWithDefaults instantiates a new CommissionCodeSummaryInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CommissionCodeSummaryInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CommissionCodeSummaryInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CommissionCodeSummaryInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CommissionCodeSummaryInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCommissionCode

`func (o *CommissionCodeSummaryInfoType) GetCommissionCode() string`

GetCommissionCode returns the CommissionCode field if non-nil, zero value otherwise.

### GetCommissionCodeOk

`func (o *CommissionCodeSummaryInfoType) GetCommissionCodeOk() (*string, bool)`

GetCommissionCodeOk returns a tuple with the CommissionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionCode

`func (o *CommissionCodeSummaryInfoType) SetCommissionCode(v string)`

SetCommissionCode sets CommissionCode field to given value.

### HasCommissionCode

`func (o *CommissionCodeSummaryInfoType) HasCommissionCode() bool`

HasCommissionCode returns a boolean if a field has been set.

### GetDescription

`func (o *CommissionCodeSummaryInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CommissionCodeSummaryInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CommissionCodeSummaryInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CommissionCodeSummaryInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *CommissionCodeSummaryInfoType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *CommissionCodeSummaryInfoType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *CommissionCodeSummaryInfoType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *CommissionCodeSummaryInfoType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetBasedOn

`func (o *CommissionCodeSummaryInfoType) GetBasedOn() CommissionBasedOnType`

GetBasedOn returns the BasedOn field if non-nil, zero value otherwise.

### GetBasedOnOk

`func (o *CommissionCodeSummaryInfoType) GetBasedOnOk() (*CommissionBasedOnType, bool)`

GetBasedOnOk returns a tuple with the BasedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasedOn

`func (o *CommissionCodeSummaryInfoType) SetBasedOn(v CommissionBasedOnType)`

SetBasedOn sets BasedOn field to given value.

### HasBasedOn

`func (o *CommissionCodeSummaryInfoType) HasBasedOn() bool`

HasBasedOn returns a boolean if a field has been set.

### GetCommissionAmount

`func (o *CommissionCodeSummaryInfoType) GetCommissionAmount() CurrencyAmountType`

GetCommissionAmount returns the CommissionAmount field if non-nil, zero value otherwise.

### GetCommissionAmountOk

`func (o *CommissionCodeSummaryInfoType) GetCommissionAmountOk() (*CurrencyAmountType, bool)`

GetCommissionAmountOk returns a tuple with the CommissionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionAmount

`func (o *CommissionCodeSummaryInfoType) SetCommissionAmount(v CurrencyAmountType)`

SetCommissionAmount sets CommissionAmount field to given value.

### HasCommissionAmount

`func (o *CommissionCodeSummaryInfoType) HasCommissionAmount() bool`

HasCommissionAmount returns a boolean if a field has been set.

### GetTaxPercentage

`func (o *CommissionCodeSummaryInfoType) GetTaxPercentage() float32`

GetTaxPercentage returns the TaxPercentage field if non-nil, zero value otherwise.

### GetTaxPercentageOk

`func (o *CommissionCodeSummaryInfoType) GetTaxPercentageOk() (*float32, bool)`

GetTaxPercentageOk returns a tuple with the TaxPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxPercentage

`func (o *CommissionCodeSummaryInfoType) SetTaxPercentage(v float32)`

SetTaxPercentage sets TaxPercentage field to given value.

### HasTaxPercentage

`func (o *CommissionCodeSummaryInfoType) HasTaxPercentage() bool`

HasTaxPercentage returns a boolean if a field has been set.

### GetDefault

`func (o *CommissionCodeSummaryInfoType) GetDefault() bool`

GetDefault returns the Default field if non-nil, zero value otherwise.

### GetDefaultOk

`func (o *CommissionCodeSummaryInfoType) GetDefaultOk() (*bool, bool)`

GetDefaultOk returns a tuple with the Default field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefault

`func (o *CommissionCodeSummaryInfoType) SetDefault(v bool)`

SetDefault sets Default field to given value.

### HasDefault

`func (o *CommissionCodeSummaryInfoType) HasDefault() bool`

HasDefault returns a boolean if a field has been set.

### GetManagedBy

`func (o *CommissionCodeSummaryInfoType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *CommissionCodeSummaryInfoType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *CommissionCodeSummaryInfoType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *CommissionCodeSummaryInfoType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


