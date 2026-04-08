# UpsellInfoTypeUpsellInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalUpsellCharge** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalUpsellMoneyAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**FirstNightUpsellAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**FirstNightUpsellCharge** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalUpsellPoints** | Pointer to **int32** | Total Upsell Points. | [optional] 
**TotalActualRateAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RoomType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**RoomLongDescription** | Pointer to **string** | Detail description of the Room Type. | [optional] 
**RuleId** | Pointer to **int32** | Upsell Rule Id. | [optional] 
**RuleCode** | Pointer to **string** | Upsell rule code | [optional] 
**RuleDescription** | Pointer to **string** | Upsell rule description | [optional] 
**PercentageSavings** | Pointer to **float32** | Percentage savings resulting from accepting upsell offer. This will be calculated as the ratio of the amount saved by accepting the upsell offer to the actual room rate (i.e. room rate when upsell is not offered) | [optional] 
**UpsellDate** | Pointer to **string** | The date on which reservation is upgraded. | [optional] 
**UpsellUser** | Pointer to **string** | User who upgraded the reservation. | [optional] 

## Methods

### NewUpsellInfoTypeUpsellInfo

`func NewUpsellInfoTypeUpsellInfo() *UpsellInfoTypeUpsellInfo`

NewUpsellInfoTypeUpsellInfo instantiates a new UpsellInfoTypeUpsellInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpsellInfoTypeUpsellInfoWithDefaults

`func NewUpsellInfoTypeUpsellInfoWithDefaults() *UpsellInfoTypeUpsellInfo`

NewUpsellInfoTypeUpsellInfoWithDefaults instantiates a new UpsellInfoTypeUpsellInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalUpsellCharge

`func (o *UpsellInfoTypeUpsellInfo) GetTotalUpsellCharge() CurrencyAmountType`

GetTotalUpsellCharge returns the TotalUpsellCharge field if non-nil, zero value otherwise.

### GetTotalUpsellChargeOk

`func (o *UpsellInfoTypeUpsellInfo) GetTotalUpsellChargeOk() (*CurrencyAmountType, bool)`

GetTotalUpsellChargeOk returns a tuple with the TotalUpsellCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalUpsellCharge

`func (o *UpsellInfoTypeUpsellInfo) SetTotalUpsellCharge(v CurrencyAmountType)`

SetTotalUpsellCharge sets TotalUpsellCharge field to given value.

### HasTotalUpsellCharge

`func (o *UpsellInfoTypeUpsellInfo) HasTotalUpsellCharge() bool`

HasTotalUpsellCharge returns a boolean if a field has been set.

### GetTotalUpsellMoneyAmount

`func (o *UpsellInfoTypeUpsellInfo) GetTotalUpsellMoneyAmount() CurrencyAmountType`

GetTotalUpsellMoneyAmount returns the TotalUpsellMoneyAmount field if non-nil, zero value otherwise.

### GetTotalUpsellMoneyAmountOk

`func (o *UpsellInfoTypeUpsellInfo) GetTotalUpsellMoneyAmountOk() (*CurrencyAmountType, bool)`

GetTotalUpsellMoneyAmountOk returns a tuple with the TotalUpsellMoneyAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalUpsellMoneyAmount

`func (o *UpsellInfoTypeUpsellInfo) SetTotalUpsellMoneyAmount(v CurrencyAmountType)`

SetTotalUpsellMoneyAmount sets TotalUpsellMoneyAmount field to given value.

### HasTotalUpsellMoneyAmount

`func (o *UpsellInfoTypeUpsellInfo) HasTotalUpsellMoneyAmount() bool`

HasTotalUpsellMoneyAmount returns a boolean if a field has been set.

### GetFirstNightUpsellAmount

`func (o *UpsellInfoTypeUpsellInfo) GetFirstNightUpsellAmount() CurrencyAmountType`

GetFirstNightUpsellAmount returns the FirstNightUpsellAmount field if non-nil, zero value otherwise.

### GetFirstNightUpsellAmountOk

`func (o *UpsellInfoTypeUpsellInfo) GetFirstNightUpsellAmountOk() (*CurrencyAmountType, bool)`

GetFirstNightUpsellAmountOk returns a tuple with the FirstNightUpsellAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstNightUpsellAmount

`func (o *UpsellInfoTypeUpsellInfo) SetFirstNightUpsellAmount(v CurrencyAmountType)`

SetFirstNightUpsellAmount sets FirstNightUpsellAmount field to given value.

### HasFirstNightUpsellAmount

`func (o *UpsellInfoTypeUpsellInfo) HasFirstNightUpsellAmount() bool`

HasFirstNightUpsellAmount returns a boolean if a field has been set.

### GetFirstNightUpsellCharge

`func (o *UpsellInfoTypeUpsellInfo) GetFirstNightUpsellCharge() CurrencyAmountType`

GetFirstNightUpsellCharge returns the FirstNightUpsellCharge field if non-nil, zero value otherwise.

### GetFirstNightUpsellChargeOk

`func (o *UpsellInfoTypeUpsellInfo) GetFirstNightUpsellChargeOk() (*CurrencyAmountType, bool)`

GetFirstNightUpsellChargeOk returns a tuple with the FirstNightUpsellCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstNightUpsellCharge

`func (o *UpsellInfoTypeUpsellInfo) SetFirstNightUpsellCharge(v CurrencyAmountType)`

SetFirstNightUpsellCharge sets FirstNightUpsellCharge field to given value.

### HasFirstNightUpsellCharge

`func (o *UpsellInfoTypeUpsellInfo) HasFirstNightUpsellCharge() bool`

HasFirstNightUpsellCharge returns a boolean if a field has been set.

### GetTotalUpsellPoints

`func (o *UpsellInfoTypeUpsellInfo) GetTotalUpsellPoints() int32`

GetTotalUpsellPoints returns the TotalUpsellPoints field if non-nil, zero value otherwise.

### GetTotalUpsellPointsOk

`func (o *UpsellInfoTypeUpsellInfo) GetTotalUpsellPointsOk() (*int32, bool)`

GetTotalUpsellPointsOk returns a tuple with the TotalUpsellPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalUpsellPoints

`func (o *UpsellInfoTypeUpsellInfo) SetTotalUpsellPoints(v int32)`

SetTotalUpsellPoints sets TotalUpsellPoints field to given value.

### HasTotalUpsellPoints

`func (o *UpsellInfoTypeUpsellInfo) HasTotalUpsellPoints() bool`

HasTotalUpsellPoints returns a boolean if a field has been set.

### GetTotalActualRateAmount

`func (o *UpsellInfoTypeUpsellInfo) GetTotalActualRateAmount() CurrencyAmountType`

GetTotalActualRateAmount returns the TotalActualRateAmount field if non-nil, zero value otherwise.

### GetTotalActualRateAmountOk

`func (o *UpsellInfoTypeUpsellInfo) GetTotalActualRateAmountOk() (*CurrencyAmountType, bool)`

GetTotalActualRateAmountOk returns a tuple with the TotalActualRateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalActualRateAmount

`func (o *UpsellInfoTypeUpsellInfo) SetTotalActualRateAmount(v CurrencyAmountType)`

SetTotalActualRateAmount sets TotalActualRateAmount field to given value.

### HasTotalActualRateAmount

`func (o *UpsellInfoTypeUpsellInfo) HasTotalActualRateAmount() bool`

HasTotalActualRateAmount returns a boolean if a field has been set.

### GetRoomType

`func (o *UpsellInfoTypeUpsellInfo) GetRoomType() CodeDescriptionType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *UpsellInfoTypeUpsellInfo) GetRoomTypeOk() (*CodeDescriptionType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *UpsellInfoTypeUpsellInfo) SetRoomType(v CodeDescriptionType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *UpsellInfoTypeUpsellInfo) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomLongDescription

`func (o *UpsellInfoTypeUpsellInfo) GetRoomLongDescription() string`

GetRoomLongDescription returns the RoomLongDescription field if non-nil, zero value otherwise.

### GetRoomLongDescriptionOk

`func (o *UpsellInfoTypeUpsellInfo) GetRoomLongDescriptionOk() (*string, bool)`

GetRoomLongDescriptionOk returns a tuple with the RoomLongDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomLongDescription

`func (o *UpsellInfoTypeUpsellInfo) SetRoomLongDescription(v string)`

SetRoomLongDescription sets RoomLongDescription field to given value.

### HasRoomLongDescription

`func (o *UpsellInfoTypeUpsellInfo) HasRoomLongDescription() bool`

HasRoomLongDescription returns a boolean if a field has been set.

### GetRuleId

`func (o *UpsellInfoTypeUpsellInfo) GetRuleId() int32`

GetRuleId returns the RuleId field if non-nil, zero value otherwise.

### GetRuleIdOk

`func (o *UpsellInfoTypeUpsellInfo) GetRuleIdOk() (*int32, bool)`

GetRuleIdOk returns a tuple with the RuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleId

`func (o *UpsellInfoTypeUpsellInfo) SetRuleId(v int32)`

SetRuleId sets RuleId field to given value.

### HasRuleId

`func (o *UpsellInfoTypeUpsellInfo) HasRuleId() bool`

HasRuleId returns a boolean if a field has been set.

### GetRuleCode

`func (o *UpsellInfoTypeUpsellInfo) GetRuleCode() string`

GetRuleCode returns the RuleCode field if non-nil, zero value otherwise.

### GetRuleCodeOk

`func (o *UpsellInfoTypeUpsellInfo) GetRuleCodeOk() (*string, bool)`

GetRuleCodeOk returns a tuple with the RuleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleCode

`func (o *UpsellInfoTypeUpsellInfo) SetRuleCode(v string)`

SetRuleCode sets RuleCode field to given value.

### HasRuleCode

`func (o *UpsellInfoTypeUpsellInfo) HasRuleCode() bool`

HasRuleCode returns a boolean if a field has been set.

### GetRuleDescription

`func (o *UpsellInfoTypeUpsellInfo) GetRuleDescription() string`

GetRuleDescription returns the RuleDescription field if non-nil, zero value otherwise.

### GetRuleDescriptionOk

`func (o *UpsellInfoTypeUpsellInfo) GetRuleDescriptionOk() (*string, bool)`

GetRuleDescriptionOk returns a tuple with the RuleDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleDescription

`func (o *UpsellInfoTypeUpsellInfo) SetRuleDescription(v string)`

SetRuleDescription sets RuleDescription field to given value.

### HasRuleDescription

`func (o *UpsellInfoTypeUpsellInfo) HasRuleDescription() bool`

HasRuleDescription returns a boolean if a field has been set.

### GetPercentageSavings

`func (o *UpsellInfoTypeUpsellInfo) GetPercentageSavings() float32`

GetPercentageSavings returns the PercentageSavings field if non-nil, zero value otherwise.

### GetPercentageSavingsOk

`func (o *UpsellInfoTypeUpsellInfo) GetPercentageSavingsOk() (*float32, bool)`

GetPercentageSavingsOk returns a tuple with the PercentageSavings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageSavings

`func (o *UpsellInfoTypeUpsellInfo) SetPercentageSavings(v float32)`

SetPercentageSavings sets PercentageSavings field to given value.

### HasPercentageSavings

`func (o *UpsellInfoTypeUpsellInfo) HasPercentageSavings() bool`

HasPercentageSavings returns a boolean if a field has been set.

### GetUpsellDate

`func (o *UpsellInfoTypeUpsellInfo) GetUpsellDate() string`

GetUpsellDate returns the UpsellDate field if non-nil, zero value otherwise.

### GetUpsellDateOk

`func (o *UpsellInfoTypeUpsellInfo) GetUpsellDateOk() (*string, bool)`

GetUpsellDateOk returns a tuple with the UpsellDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellDate

`func (o *UpsellInfoTypeUpsellInfo) SetUpsellDate(v string)`

SetUpsellDate sets UpsellDate field to given value.

### HasUpsellDate

`func (o *UpsellInfoTypeUpsellInfo) HasUpsellDate() bool`

HasUpsellDate returns a boolean if a field has been set.

### GetUpsellUser

`func (o *UpsellInfoTypeUpsellInfo) GetUpsellUser() string`

GetUpsellUser returns the UpsellUser field if non-nil, zero value otherwise.

### GetUpsellUserOk

`func (o *UpsellInfoTypeUpsellInfo) GetUpsellUserOk() (*string, bool)`

GetUpsellUserOk returns a tuple with the UpsellUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellUser

`func (o *UpsellInfoTypeUpsellInfo) SetUpsellUser(v string)`

SetUpsellUser sets UpsellUser field to given value.

### HasUpsellUser

`func (o *UpsellInfoTypeUpsellInfo) HasUpsellUser() bool`

HasUpsellUser returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


