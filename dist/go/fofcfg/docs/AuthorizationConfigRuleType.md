# AuthorizationConfigRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**GuaranteeCode** | Pointer to **string** | Guarantee code associated to this rule. | [optional] 
**HotelId** | Pointer to **string** | Property associated with authorization rule | [optional] 
**IgnoreDepositsYN** | Pointer to **bool** | Ignore deposits paid for calculation of the amount to be authorized. | [optional] 
**MaxDaysToAuthorize** | Pointer to **int32** | A maximum of two digits to set the number of days to authorize for a credit card. If the field is left blank, authorizations will be done for the entire stay duration of the reservation | [optional] 
**Percentage** | Pointer to **float32** | Percentage to be applied to all rules with a percentage configured in the formula. | [optional] 
**RateCategory** | Pointer to [**RateCategoryType**](RateCategoryType.md) |  | [optional] 
**RateCode** | Pointer to **string** | Rate code associated to this rule. | [optional] 
**RoomClass** | Pointer to [**RoomClassCodeInfoType**](RoomClassCodeInfoType.md) |  | [optional] 
**RoomType** | Pointer to **string** | Authorization rule Room type. | [optional] 
**RuleDescription** | Pointer to **string** | Rule Number description for current authorization. | [optional] 
**RuleNo** | Pointer to **int32** | Rule Number for current authorization. | [optional] 
**SourceCode** | Pointer to [**SourceCodeInfoType**](SourceCodeInfoType.md) |  | [optional] 

## Methods

### NewAuthorizationConfigRuleType

`func NewAuthorizationConfigRuleType() *AuthorizationConfigRuleType`

NewAuthorizationConfigRuleType instantiates a new AuthorizationConfigRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizationConfigRuleTypeWithDefaults

`func NewAuthorizationConfigRuleTypeWithDefaults() *AuthorizationConfigRuleType`

NewAuthorizationConfigRuleTypeWithDefaults instantiates a new AuthorizationConfigRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *AuthorizationConfigRuleType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *AuthorizationConfigRuleType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *AuthorizationConfigRuleType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *AuthorizationConfigRuleType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetGuaranteeCode

`func (o *AuthorizationConfigRuleType) GetGuaranteeCode() string`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *AuthorizationConfigRuleType) GetGuaranteeCodeOk() (*string, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *AuthorizationConfigRuleType) SetGuaranteeCode(v string)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *AuthorizationConfigRuleType) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetHotelId

`func (o *AuthorizationConfigRuleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AuthorizationConfigRuleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AuthorizationConfigRuleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AuthorizationConfigRuleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIgnoreDepositsYN

`func (o *AuthorizationConfigRuleType) GetIgnoreDepositsYN() bool`

GetIgnoreDepositsYN returns the IgnoreDepositsYN field if non-nil, zero value otherwise.

### GetIgnoreDepositsYNOk

`func (o *AuthorizationConfigRuleType) GetIgnoreDepositsYNOk() (*bool, bool)`

GetIgnoreDepositsYNOk returns a tuple with the IgnoreDepositsYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreDepositsYN

`func (o *AuthorizationConfigRuleType) SetIgnoreDepositsYN(v bool)`

SetIgnoreDepositsYN sets IgnoreDepositsYN field to given value.

### HasIgnoreDepositsYN

`func (o *AuthorizationConfigRuleType) HasIgnoreDepositsYN() bool`

HasIgnoreDepositsYN returns a boolean if a field has been set.

### GetMaxDaysToAuthorize

`func (o *AuthorizationConfigRuleType) GetMaxDaysToAuthorize() int32`

GetMaxDaysToAuthorize returns the MaxDaysToAuthorize field if non-nil, zero value otherwise.

### GetMaxDaysToAuthorizeOk

`func (o *AuthorizationConfigRuleType) GetMaxDaysToAuthorizeOk() (*int32, bool)`

GetMaxDaysToAuthorizeOk returns a tuple with the MaxDaysToAuthorize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxDaysToAuthorize

`func (o *AuthorizationConfigRuleType) SetMaxDaysToAuthorize(v int32)`

SetMaxDaysToAuthorize sets MaxDaysToAuthorize field to given value.

### HasMaxDaysToAuthorize

`func (o *AuthorizationConfigRuleType) HasMaxDaysToAuthorize() bool`

HasMaxDaysToAuthorize returns a boolean if a field has been set.

### GetPercentage

`func (o *AuthorizationConfigRuleType) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *AuthorizationConfigRuleType) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *AuthorizationConfigRuleType) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *AuthorizationConfigRuleType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetRateCategory

`func (o *AuthorizationConfigRuleType) GetRateCategory() RateCategoryType`

GetRateCategory returns the RateCategory field if non-nil, zero value otherwise.

### GetRateCategoryOk

`func (o *AuthorizationConfigRuleType) GetRateCategoryOk() (*RateCategoryType, bool)`

GetRateCategoryOk returns a tuple with the RateCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCategory

`func (o *AuthorizationConfigRuleType) SetRateCategory(v RateCategoryType)`

SetRateCategory sets RateCategory field to given value.

### HasRateCategory

`func (o *AuthorizationConfigRuleType) HasRateCategory() bool`

HasRateCategory returns a boolean if a field has been set.

### GetRateCode

`func (o *AuthorizationConfigRuleType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *AuthorizationConfigRuleType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *AuthorizationConfigRuleType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *AuthorizationConfigRuleType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRoomClass

`func (o *AuthorizationConfigRuleType) GetRoomClass() RoomClassCodeInfoType`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *AuthorizationConfigRuleType) GetRoomClassOk() (*RoomClassCodeInfoType, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *AuthorizationConfigRuleType) SetRoomClass(v RoomClassCodeInfoType)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *AuthorizationConfigRuleType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomType

`func (o *AuthorizationConfigRuleType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *AuthorizationConfigRuleType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *AuthorizationConfigRuleType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *AuthorizationConfigRuleType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRuleDescription

`func (o *AuthorizationConfigRuleType) GetRuleDescription() string`

GetRuleDescription returns the RuleDescription field if non-nil, zero value otherwise.

### GetRuleDescriptionOk

`func (o *AuthorizationConfigRuleType) GetRuleDescriptionOk() (*string, bool)`

GetRuleDescriptionOk returns a tuple with the RuleDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleDescription

`func (o *AuthorizationConfigRuleType) SetRuleDescription(v string)`

SetRuleDescription sets RuleDescription field to given value.

### HasRuleDescription

`func (o *AuthorizationConfigRuleType) HasRuleDescription() bool`

HasRuleDescription returns a boolean if a field has been set.

### GetRuleNo

`func (o *AuthorizationConfigRuleType) GetRuleNo() int32`

GetRuleNo returns the RuleNo field if non-nil, zero value otherwise.

### GetRuleNoOk

`func (o *AuthorizationConfigRuleType) GetRuleNoOk() (*int32, bool)`

GetRuleNoOk returns a tuple with the RuleNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleNo

`func (o *AuthorizationConfigRuleType) SetRuleNo(v int32)`

SetRuleNo sets RuleNo field to given value.

### HasRuleNo

`func (o *AuthorizationConfigRuleType) HasRuleNo() bool`

HasRuleNo returns a boolean if a field has been set.

### GetSourceCode

`func (o *AuthorizationConfigRuleType) GetSourceCode() SourceCodeInfoType`

GetSourceCode returns the SourceCode field if non-nil, zero value otherwise.

### GetSourceCodeOk

`func (o *AuthorizationConfigRuleType) GetSourceCodeOk() (*SourceCodeInfoType, bool)`

GetSourceCodeOk returns a tuple with the SourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCode

`func (o *AuthorizationConfigRuleType) SetSourceCode(v SourceCodeInfoType)`

SetSourceCode sets SourceCode field to given value.

### HasSourceCode

`func (o *AuthorizationConfigRuleType) HasSourceCode() bool`

HasSourceCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


