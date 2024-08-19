# AmountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalGuestAmounts** | Pointer to [**[]AdditionalGuestAmountType**](AdditionalGuestAmountType.md) | Collection of incremental charges per age qualifying code for additional guests. Amount charged for additional occupant is with respect to age group of the base guests. | [optional] 
**Base** | Pointer to [**TotalType**](TotalType.md) |  | [optional] 
**Discount** | Pointer to [**DiscountType**](DiscountType.md) |  | [optional] 
**EffectiveRate** | Pointer to [**TotalType**](TotalType.md) |  | [optional] 
**EventEndDate** | Pointer to **string** | The ending value of the date range. | [optional] 
**EventStartDate** | Pointer to **string** | The starting value of the date range. | [optional] 
**RequiredPoints** | Pointer to [**PointsType**](PointsType.md) |  | [optional] 
**ShareDistributionInstruction** | Pointer to [**ShareDistributionInstructionType**](ShareDistributionInstructionType.md) |  | [optional] 
**ShareRatePercentage** | Pointer to **float32** | Indicates the share rate percentage for the reservation if set to CUSTOMSPLIT. | [optional] 
**Total** | Pointer to [**TotalType**](TotalType.md) |  | [optional] 

## Methods

### NewAmountType

`func NewAmountType() *AmountType`

NewAmountType instantiates a new AmountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAmountTypeWithDefaults

`func NewAmountTypeWithDefaults() *AmountType`

NewAmountTypeWithDefaults instantiates a new AmountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalGuestAmounts

`func (o *AmountType) GetAdditionalGuestAmounts() []AdditionalGuestAmountType`

GetAdditionalGuestAmounts returns the AdditionalGuestAmounts field if non-nil, zero value otherwise.

### GetAdditionalGuestAmountsOk

`func (o *AmountType) GetAdditionalGuestAmountsOk() (*[]AdditionalGuestAmountType, bool)`

GetAdditionalGuestAmountsOk returns a tuple with the AdditionalGuestAmounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalGuestAmounts

`func (o *AmountType) SetAdditionalGuestAmounts(v []AdditionalGuestAmountType)`

SetAdditionalGuestAmounts sets AdditionalGuestAmounts field to given value.

### HasAdditionalGuestAmounts

`func (o *AmountType) HasAdditionalGuestAmounts() bool`

HasAdditionalGuestAmounts returns a boolean if a field has been set.

### GetBase

`func (o *AmountType) GetBase() TotalType`

GetBase returns the Base field if non-nil, zero value otherwise.

### GetBaseOk

`func (o *AmountType) GetBaseOk() (*TotalType, bool)`

GetBaseOk returns a tuple with the Base field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBase

`func (o *AmountType) SetBase(v TotalType)`

SetBase sets Base field to given value.

### HasBase

`func (o *AmountType) HasBase() bool`

HasBase returns a boolean if a field has been set.

### GetDiscount

`func (o *AmountType) GetDiscount() DiscountType`

GetDiscount returns the Discount field if non-nil, zero value otherwise.

### GetDiscountOk

`func (o *AmountType) GetDiscountOk() (*DiscountType, bool)`

GetDiscountOk returns a tuple with the Discount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscount

`func (o *AmountType) SetDiscount(v DiscountType)`

SetDiscount sets Discount field to given value.

### HasDiscount

`func (o *AmountType) HasDiscount() bool`

HasDiscount returns a boolean if a field has been set.

### GetEffectiveRate

`func (o *AmountType) GetEffectiveRate() TotalType`

GetEffectiveRate returns the EffectiveRate field if non-nil, zero value otherwise.

### GetEffectiveRateOk

`func (o *AmountType) GetEffectiveRateOk() (*TotalType, bool)`

GetEffectiveRateOk returns a tuple with the EffectiveRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveRate

`func (o *AmountType) SetEffectiveRate(v TotalType)`

SetEffectiveRate sets EffectiveRate field to given value.

### HasEffectiveRate

`func (o *AmountType) HasEffectiveRate() bool`

HasEffectiveRate returns a boolean if a field has been set.

### GetEventEndDate

`func (o *AmountType) GetEventEndDate() string`

GetEventEndDate returns the EventEndDate field if non-nil, zero value otherwise.

### GetEventEndDateOk

`func (o *AmountType) GetEventEndDateOk() (*string, bool)`

GetEventEndDateOk returns a tuple with the EventEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventEndDate

`func (o *AmountType) SetEventEndDate(v string)`

SetEventEndDate sets EventEndDate field to given value.

### HasEventEndDate

`func (o *AmountType) HasEventEndDate() bool`

HasEventEndDate returns a boolean if a field has been set.

### GetEventStartDate

`func (o *AmountType) GetEventStartDate() string`

GetEventStartDate returns the EventStartDate field if non-nil, zero value otherwise.

### GetEventStartDateOk

`func (o *AmountType) GetEventStartDateOk() (*string, bool)`

GetEventStartDateOk returns a tuple with the EventStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStartDate

`func (o *AmountType) SetEventStartDate(v string)`

SetEventStartDate sets EventStartDate field to given value.

### HasEventStartDate

`func (o *AmountType) HasEventStartDate() bool`

HasEventStartDate returns a boolean if a field has been set.

### GetRequiredPoints

`func (o *AmountType) GetRequiredPoints() PointsType`

GetRequiredPoints returns the RequiredPoints field if non-nil, zero value otherwise.

### GetRequiredPointsOk

`func (o *AmountType) GetRequiredPointsOk() (*PointsType, bool)`

GetRequiredPointsOk returns a tuple with the RequiredPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredPoints

`func (o *AmountType) SetRequiredPoints(v PointsType)`

SetRequiredPoints sets RequiredPoints field to given value.

### HasRequiredPoints

`func (o *AmountType) HasRequiredPoints() bool`

HasRequiredPoints returns a boolean if a field has been set.

### GetShareDistributionInstruction

`func (o *AmountType) GetShareDistributionInstruction() ShareDistributionInstructionType`

GetShareDistributionInstruction returns the ShareDistributionInstruction field if non-nil, zero value otherwise.

### GetShareDistributionInstructionOk

`func (o *AmountType) GetShareDistributionInstructionOk() (*ShareDistributionInstructionType, bool)`

GetShareDistributionInstructionOk returns a tuple with the ShareDistributionInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareDistributionInstruction

`func (o *AmountType) SetShareDistributionInstruction(v ShareDistributionInstructionType)`

SetShareDistributionInstruction sets ShareDistributionInstruction field to given value.

### HasShareDistributionInstruction

`func (o *AmountType) HasShareDistributionInstruction() bool`

HasShareDistributionInstruction returns a boolean if a field has been set.

### GetShareRatePercentage

`func (o *AmountType) GetShareRatePercentage() float32`

GetShareRatePercentage returns the ShareRatePercentage field if non-nil, zero value otherwise.

### GetShareRatePercentageOk

`func (o *AmountType) GetShareRatePercentageOk() (*float32, bool)`

GetShareRatePercentageOk returns a tuple with the ShareRatePercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareRatePercentage

`func (o *AmountType) SetShareRatePercentage(v float32)`

SetShareRatePercentage sets ShareRatePercentage field to given value.

### HasShareRatePercentage

`func (o *AmountType) HasShareRatePercentage() bool`

HasShareRatePercentage returns a boolean if a field has been set.

### GetTotal

`func (o *AmountType) GetTotal() TotalType`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *AmountType) GetTotalOk() (*TotalType, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *AmountType) SetTotal(v TotalType)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *AmountType) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


