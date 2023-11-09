# UpsellType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FirstNightAmount** | Pointer to [**AmountPointsType**](AmountPointsType.md) |  | [optional] 
**PercentageSavings** | Pointer to **float32** | Percentage savings resulting from accepting upsell offer. This will be calculated as the ratio of the amount saved by accepting the upsell offer to the actual room rate (i.e. room rate when upsell is not offered) | [optional] 
**RatePlanCode** | Pointer to **string** | Rate code | [optional] 
**Rates** | Pointer to [**UpsellDailyRatesType**](UpsellDailyRatesType.md) |  | [optional] 
**RoomType** | Pointer to [**RoomTypeInfoType**](RoomTypeInfoType.md) |  | [optional] 
**RuleCode** | Pointer to **string** | Upsell rule code | [optional] 
**RuleDescription** | Pointer to **string** | Upsell rule description | [optional] 
**RuleId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TotalStayAmount** | Pointer to [**AmountPointsType**](AmountPointsType.md) |  | [optional] 
**UpsellType** | Pointer to **string** | Rate code redemption type. | [optional] 

## Methods

### NewUpsellType

`func NewUpsellType() *UpsellType`

NewUpsellType instantiates a new UpsellType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpsellTypeWithDefaults

`func NewUpsellTypeWithDefaults() *UpsellType`

NewUpsellTypeWithDefaults instantiates a new UpsellType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFirstNightAmount

`func (o *UpsellType) GetFirstNightAmount() AmountPointsType`

GetFirstNightAmount returns the FirstNightAmount field if non-nil, zero value otherwise.

### GetFirstNightAmountOk

`func (o *UpsellType) GetFirstNightAmountOk() (*AmountPointsType, bool)`

GetFirstNightAmountOk returns a tuple with the FirstNightAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstNightAmount

`func (o *UpsellType) SetFirstNightAmount(v AmountPointsType)`

SetFirstNightAmount sets FirstNightAmount field to given value.

### HasFirstNightAmount

`func (o *UpsellType) HasFirstNightAmount() bool`

HasFirstNightAmount returns a boolean if a field has been set.

### GetPercentageSavings

`func (o *UpsellType) GetPercentageSavings() float32`

GetPercentageSavings returns the PercentageSavings field if non-nil, zero value otherwise.

### GetPercentageSavingsOk

`func (o *UpsellType) GetPercentageSavingsOk() (*float32, bool)`

GetPercentageSavingsOk returns a tuple with the PercentageSavings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageSavings

`func (o *UpsellType) SetPercentageSavings(v float32)`

SetPercentageSavings sets PercentageSavings field to given value.

### HasPercentageSavings

`func (o *UpsellType) HasPercentageSavings() bool`

HasPercentageSavings returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *UpsellType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *UpsellType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *UpsellType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *UpsellType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRates

`func (o *UpsellType) GetRates() UpsellDailyRatesType`

GetRates returns the Rates field if non-nil, zero value otherwise.

### GetRatesOk

`func (o *UpsellType) GetRatesOk() (*UpsellDailyRatesType, bool)`

GetRatesOk returns a tuple with the Rates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRates

`func (o *UpsellType) SetRates(v UpsellDailyRatesType)`

SetRates sets Rates field to given value.

### HasRates

`func (o *UpsellType) HasRates() bool`

HasRates returns a boolean if a field has been set.

### GetRoomType

`func (o *UpsellType) GetRoomType() RoomTypeInfoType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *UpsellType) GetRoomTypeOk() (*RoomTypeInfoType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *UpsellType) SetRoomType(v RoomTypeInfoType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *UpsellType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRuleCode

`func (o *UpsellType) GetRuleCode() string`

GetRuleCode returns the RuleCode field if non-nil, zero value otherwise.

### GetRuleCodeOk

`func (o *UpsellType) GetRuleCodeOk() (*string, bool)`

GetRuleCodeOk returns a tuple with the RuleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleCode

`func (o *UpsellType) SetRuleCode(v string)`

SetRuleCode sets RuleCode field to given value.

### HasRuleCode

`func (o *UpsellType) HasRuleCode() bool`

HasRuleCode returns a boolean if a field has been set.

### GetRuleDescription

`func (o *UpsellType) GetRuleDescription() string`

GetRuleDescription returns the RuleDescription field if non-nil, zero value otherwise.

### GetRuleDescriptionOk

`func (o *UpsellType) GetRuleDescriptionOk() (*string, bool)`

GetRuleDescriptionOk returns a tuple with the RuleDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleDescription

`func (o *UpsellType) SetRuleDescription(v string)`

SetRuleDescription sets RuleDescription field to given value.

### HasRuleDescription

`func (o *UpsellType) HasRuleDescription() bool`

HasRuleDescription returns a boolean if a field has been set.

### GetRuleId

`func (o *UpsellType) GetRuleId() UniqueIDType`

GetRuleId returns the RuleId field if non-nil, zero value otherwise.

### GetRuleIdOk

`func (o *UpsellType) GetRuleIdOk() (*UniqueIDType, bool)`

GetRuleIdOk returns a tuple with the RuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleId

`func (o *UpsellType) SetRuleId(v UniqueIDType)`

SetRuleId sets RuleId field to given value.

### HasRuleId

`func (o *UpsellType) HasRuleId() bool`

HasRuleId returns a boolean if a field has been set.

### GetTotalStayAmount

`func (o *UpsellType) GetTotalStayAmount() AmountPointsType`

GetTotalStayAmount returns the TotalStayAmount field if non-nil, zero value otherwise.

### GetTotalStayAmountOk

`func (o *UpsellType) GetTotalStayAmountOk() (*AmountPointsType, bool)`

GetTotalStayAmountOk returns a tuple with the TotalStayAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalStayAmount

`func (o *UpsellType) SetTotalStayAmount(v AmountPointsType)`

SetTotalStayAmount sets TotalStayAmount field to given value.

### HasTotalStayAmount

`func (o *UpsellType) HasTotalStayAmount() bool`

HasTotalStayAmount returns a boolean if a field has been set.

### GetUpsellType

`func (o *UpsellType) GetUpsellType() string`

GetUpsellType returns the UpsellType field if non-nil, zero value otherwise.

### GetUpsellTypeOk

`func (o *UpsellType) GetUpsellTypeOk() (*string, bool)`

GetUpsellTypeOk returns a tuple with the UpsellType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellType

`func (o *UpsellType) SetUpsellType(v string)`

SetUpsellType sets UpsellType field to given value.

### HasUpsellType

`func (o *UpsellType) HasUpsellType() bool`

HasUpsellType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


