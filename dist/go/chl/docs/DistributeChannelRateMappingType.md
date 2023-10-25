# DistributeChannelRateMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowRateUpdate** | Pointer to **bool** | Indicates if Rate updates to Channel are allowed. | [optional] 
**AllowRestrictionUpdate** | Pointer to **bool** | Indicates if Rate Restrictions are sent to an ADS, GDS, or ODS partner, such as Expedia, via the AVH messaging functionality. | [optional] 
**BeginDate** | Pointer to **string** | Begin date of the channel rate code mapping. | [optional] 
**BlockRateIndicator** | Pointer to **string** | Block Rate Indicator. | [optional] 
**CarrierInfo** | Pointer to [**CarrierInfoType**](CarrierInfoType.md) |  | [optional] 
**ChannelRatePlanCategory** | Pointer to **string** | Channel rate category of hotel-channel rate code mapping. | [optional] 
**ChannelRatePlanOrder** | Pointer to **float32** | Order of the channel rate type mapping. | [optional] 
**ChannelRatePlanWebName** | Pointer to **string** | Name of channel rate plan code to display on web. | [optional] 
**Description** | Pointer to [**ChannelRateMappingDescriptionType**](ChannelRateMappingDescriptionType.md) |  | [optional] 
**EndDate** | Pointer to **string** | End date of the channel rate code mapping. | [optional] 
**HasChannelNegotiatedRates** | Pointer to **bool** | True if the mapping has channel negotiated rates, otherwise false. | [optional] 
**HasNegotiatedRates** | Pointer to **bool** | True if this channel rate plan code has negotiated rates, otherwise false | [optional] 
**NewChannelRatePlanCode** | Pointer to **string** | New Channel Rate Plan Code of the mapping. Used only to change the Channel Rate Plan Code. | [optional] 
**PromotionCode** | Pointer to **string** | Promotion Code. | [optional] 
**RateLevel** | Pointer to **string** | Rate Level. | [optional] 
**RatePlanCode** | Pointer to **string** | Rate Plan Code. | [optional] 
**RatePlanInfo** | Pointer to [**RatePlanPrimaryDetailsType**](RatePlanPrimaryDetailsType.md) |  | [optional] 
**RateTierAttr** | Pointer to [**ChannelRateMappingTypeRateTierAttr**](ChannelRateMappingTypeRateTierAttr.md) |  | [optional] 
**RegionalAvailAttr** | Pointer to [**ChannelRateMappingTypeRegionalAvailAttr**](ChannelRateMappingTypeRegionalAvailAttr.md) |  | [optional] 
**RoomTypes** | Pointer to **[]string** |  | [optional] 

## Methods

### NewDistributeChannelRateMappingType

`func NewDistributeChannelRateMappingType() *DistributeChannelRateMappingType`

NewDistributeChannelRateMappingType instantiates a new DistributeChannelRateMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDistributeChannelRateMappingTypeWithDefaults

`func NewDistributeChannelRateMappingTypeWithDefaults() *DistributeChannelRateMappingType`

NewDistributeChannelRateMappingTypeWithDefaults instantiates a new DistributeChannelRateMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowRateUpdate

`func (o *DistributeChannelRateMappingType) GetAllowRateUpdate() bool`

GetAllowRateUpdate returns the AllowRateUpdate field if non-nil, zero value otherwise.

### GetAllowRateUpdateOk

`func (o *DistributeChannelRateMappingType) GetAllowRateUpdateOk() (*bool, bool)`

GetAllowRateUpdateOk returns a tuple with the AllowRateUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRateUpdate

`func (o *DistributeChannelRateMappingType) SetAllowRateUpdate(v bool)`

SetAllowRateUpdate sets AllowRateUpdate field to given value.

### HasAllowRateUpdate

`func (o *DistributeChannelRateMappingType) HasAllowRateUpdate() bool`

HasAllowRateUpdate returns a boolean if a field has been set.

### GetAllowRestrictionUpdate

`func (o *DistributeChannelRateMappingType) GetAllowRestrictionUpdate() bool`

GetAllowRestrictionUpdate returns the AllowRestrictionUpdate field if non-nil, zero value otherwise.

### GetAllowRestrictionUpdateOk

`func (o *DistributeChannelRateMappingType) GetAllowRestrictionUpdateOk() (*bool, bool)`

GetAllowRestrictionUpdateOk returns a tuple with the AllowRestrictionUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRestrictionUpdate

`func (o *DistributeChannelRateMappingType) SetAllowRestrictionUpdate(v bool)`

SetAllowRestrictionUpdate sets AllowRestrictionUpdate field to given value.

### HasAllowRestrictionUpdate

`func (o *DistributeChannelRateMappingType) HasAllowRestrictionUpdate() bool`

HasAllowRestrictionUpdate returns a boolean if a field has been set.

### GetBeginDate

`func (o *DistributeChannelRateMappingType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *DistributeChannelRateMappingType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *DistributeChannelRateMappingType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *DistributeChannelRateMappingType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetBlockRateIndicator

`func (o *DistributeChannelRateMappingType) GetBlockRateIndicator() string`

GetBlockRateIndicator returns the BlockRateIndicator field if non-nil, zero value otherwise.

### GetBlockRateIndicatorOk

`func (o *DistributeChannelRateMappingType) GetBlockRateIndicatorOk() (*string, bool)`

GetBlockRateIndicatorOk returns a tuple with the BlockRateIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRateIndicator

`func (o *DistributeChannelRateMappingType) SetBlockRateIndicator(v string)`

SetBlockRateIndicator sets BlockRateIndicator field to given value.

### HasBlockRateIndicator

`func (o *DistributeChannelRateMappingType) HasBlockRateIndicator() bool`

HasBlockRateIndicator returns a boolean if a field has been set.

### GetCarrierInfo

`func (o *DistributeChannelRateMappingType) GetCarrierInfo() CarrierInfoType`

GetCarrierInfo returns the CarrierInfo field if non-nil, zero value otherwise.

### GetCarrierInfoOk

`func (o *DistributeChannelRateMappingType) GetCarrierInfoOk() (*CarrierInfoType, bool)`

GetCarrierInfoOk returns a tuple with the CarrierInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarrierInfo

`func (o *DistributeChannelRateMappingType) SetCarrierInfo(v CarrierInfoType)`

SetCarrierInfo sets CarrierInfo field to given value.

### HasCarrierInfo

`func (o *DistributeChannelRateMappingType) HasCarrierInfo() bool`

HasCarrierInfo returns a boolean if a field has been set.

### GetChannelRatePlanCategory

`func (o *DistributeChannelRateMappingType) GetChannelRatePlanCategory() string`

GetChannelRatePlanCategory returns the ChannelRatePlanCategory field if non-nil, zero value otherwise.

### GetChannelRatePlanCategoryOk

`func (o *DistributeChannelRateMappingType) GetChannelRatePlanCategoryOk() (*string, bool)`

GetChannelRatePlanCategoryOk returns a tuple with the ChannelRatePlanCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanCategory

`func (o *DistributeChannelRateMappingType) SetChannelRatePlanCategory(v string)`

SetChannelRatePlanCategory sets ChannelRatePlanCategory field to given value.

### HasChannelRatePlanCategory

`func (o *DistributeChannelRateMappingType) HasChannelRatePlanCategory() bool`

HasChannelRatePlanCategory returns a boolean if a field has been set.

### GetChannelRatePlanOrder

`func (o *DistributeChannelRateMappingType) GetChannelRatePlanOrder() float32`

GetChannelRatePlanOrder returns the ChannelRatePlanOrder field if non-nil, zero value otherwise.

### GetChannelRatePlanOrderOk

`func (o *DistributeChannelRateMappingType) GetChannelRatePlanOrderOk() (*float32, bool)`

GetChannelRatePlanOrderOk returns a tuple with the ChannelRatePlanOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanOrder

`func (o *DistributeChannelRateMappingType) SetChannelRatePlanOrder(v float32)`

SetChannelRatePlanOrder sets ChannelRatePlanOrder field to given value.

### HasChannelRatePlanOrder

`func (o *DistributeChannelRateMappingType) HasChannelRatePlanOrder() bool`

HasChannelRatePlanOrder returns a boolean if a field has been set.

### GetChannelRatePlanWebName

`func (o *DistributeChannelRateMappingType) GetChannelRatePlanWebName() string`

GetChannelRatePlanWebName returns the ChannelRatePlanWebName field if non-nil, zero value otherwise.

### GetChannelRatePlanWebNameOk

`func (o *DistributeChannelRateMappingType) GetChannelRatePlanWebNameOk() (*string, bool)`

GetChannelRatePlanWebNameOk returns a tuple with the ChannelRatePlanWebName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanWebName

`func (o *DistributeChannelRateMappingType) SetChannelRatePlanWebName(v string)`

SetChannelRatePlanWebName sets ChannelRatePlanWebName field to given value.

### HasChannelRatePlanWebName

`func (o *DistributeChannelRateMappingType) HasChannelRatePlanWebName() bool`

HasChannelRatePlanWebName returns a boolean if a field has been set.

### GetDescription

`func (o *DistributeChannelRateMappingType) GetDescription() ChannelRateMappingDescriptionType`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DistributeChannelRateMappingType) GetDescriptionOk() (*ChannelRateMappingDescriptionType, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DistributeChannelRateMappingType) SetDescription(v ChannelRateMappingDescriptionType)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DistributeChannelRateMappingType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEndDate

`func (o *DistributeChannelRateMappingType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *DistributeChannelRateMappingType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *DistributeChannelRateMappingType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *DistributeChannelRateMappingType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetHasChannelNegotiatedRates

`func (o *DistributeChannelRateMappingType) GetHasChannelNegotiatedRates() bool`

GetHasChannelNegotiatedRates returns the HasChannelNegotiatedRates field if non-nil, zero value otherwise.

### GetHasChannelNegotiatedRatesOk

`func (o *DistributeChannelRateMappingType) GetHasChannelNegotiatedRatesOk() (*bool, bool)`

GetHasChannelNegotiatedRatesOk returns a tuple with the HasChannelNegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasChannelNegotiatedRates

`func (o *DistributeChannelRateMappingType) SetHasChannelNegotiatedRates(v bool)`

SetHasChannelNegotiatedRates sets HasChannelNegotiatedRates field to given value.

### HasHasChannelNegotiatedRates

`func (o *DistributeChannelRateMappingType) HasHasChannelNegotiatedRates() bool`

HasHasChannelNegotiatedRates returns a boolean if a field has been set.

### GetHasNegotiatedRates

`func (o *DistributeChannelRateMappingType) GetHasNegotiatedRates() bool`

GetHasNegotiatedRates returns the HasNegotiatedRates field if non-nil, zero value otherwise.

### GetHasNegotiatedRatesOk

`func (o *DistributeChannelRateMappingType) GetHasNegotiatedRatesOk() (*bool, bool)`

GetHasNegotiatedRatesOk returns a tuple with the HasNegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNegotiatedRates

`func (o *DistributeChannelRateMappingType) SetHasNegotiatedRates(v bool)`

SetHasNegotiatedRates sets HasNegotiatedRates field to given value.

### HasHasNegotiatedRates

`func (o *DistributeChannelRateMappingType) HasHasNegotiatedRates() bool`

HasHasNegotiatedRates returns a boolean if a field has been set.

### GetNewChannelRatePlanCode

`func (o *DistributeChannelRateMappingType) GetNewChannelRatePlanCode() string`

GetNewChannelRatePlanCode returns the NewChannelRatePlanCode field if non-nil, zero value otherwise.

### GetNewChannelRatePlanCodeOk

`func (o *DistributeChannelRateMappingType) GetNewChannelRatePlanCodeOk() (*string, bool)`

GetNewChannelRatePlanCodeOk returns a tuple with the NewChannelRatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewChannelRatePlanCode

`func (o *DistributeChannelRateMappingType) SetNewChannelRatePlanCode(v string)`

SetNewChannelRatePlanCode sets NewChannelRatePlanCode field to given value.

### HasNewChannelRatePlanCode

`func (o *DistributeChannelRateMappingType) HasNewChannelRatePlanCode() bool`

HasNewChannelRatePlanCode returns a boolean if a field has been set.

### GetPromotionCode

`func (o *DistributeChannelRateMappingType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *DistributeChannelRateMappingType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *DistributeChannelRateMappingType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *DistributeChannelRateMappingType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetRateLevel

`func (o *DistributeChannelRateMappingType) GetRateLevel() string`

GetRateLevel returns the RateLevel field if non-nil, zero value otherwise.

### GetRateLevelOk

`func (o *DistributeChannelRateMappingType) GetRateLevelOk() (*string, bool)`

GetRateLevelOk returns a tuple with the RateLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLevel

`func (o *DistributeChannelRateMappingType) SetRateLevel(v string)`

SetRateLevel sets RateLevel field to given value.

### HasRateLevel

`func (o *DistributeChannelRateMappingType) HasRateLevel() bool`

HasRateLevel returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *DistributeChannelRateMappingType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *DistributeChannelRateMappingType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *DistributeChannelRateMappingType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *DistributeChannelRateMappingType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRatePlanInfo

`func (o *DistributeChannelRateMappingType) GetRatePlanInfo() RatePlanPrimaryDetailsType`

GetRatePlanInfo returns the RatePlanInfo field if non-nil, zero value otherwise.

### GetRatePlanInfoOk

`func (o *DistributeChannelRateMappingType) GetRatePlanInfoOk() (*RatePlanPrimaryDetailsType, bool)`

GetRatePlanInfoOk returns a tuple with the RatePlanInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanInfo

`func (o *DistributeChannelRateMappingType) SetRatePlanInfo(v RatePlanPrimaryDetailsType)`

SetRatePlanInfo sets RatePlanInfo field to given value.

### HasRatePlanInfo

`func (o *DistributeChannelRateMappingType) HasRatePlanInfo() bool`

HasRatePlanInfo returns a boolean if a field has been set.

### GetRateTierAttr

`func (o *DistributeChannelRateMappingType) GetRateTierAttr() ChannelRateMappingTypeRateTierAttr`

GetRateTierAttr returns the RateTierAttr field if non-nil, zero value otherwise.

### GetRateTierAttrOk

`func (o *DistributeChannelRateMappingType) GetRateTierAttrOk() (*ChannelRateMappingTypeRateTierAttr, bool)`

GetRateTierAttrOk returns a tuple with the RateTierAttr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateTierAttr

`func (o *DistributeChannelRateMappingType) SetRateTierAttr(v ChannelRateMappingTypeRateTierAttr)`

SetRateTierAttr sets RateTierAttr field to given value.

### HasRateTierAttr

`func (o *DistributeChannelRateMappingType) HasRateTierAttr() bool`

HasRateTierAttr returns a boolean if a field has been set.

### GetRegionalAvailAttr

`func (o *DistributeChannelRateMappingType) GetRegionalAvailAttr() ChannelRateMappingTypeRegionalAvailAttr`

GetRegionalAvailAttr returns the RegionalAvailAttr field if non-nil, zero value otherwise.

### GetRegionalAvailAttrOk

`func (o *DistributeChannelRateMappingType) GetRegionalAvailAttrOk() (*ChannelRateMappingTypeRegionalAvailAttr, bool)`

GetRegionalAvailAttrOk returns a tuple with the RegionalAvailAttr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionalAvailAttr

`func (o *DistributeChannelRateMappingType) SetRegionalAvailAttr(v ChannelRateMappingTypeRegionalAvailAttr)`

SetRegionalAvailAttr sets RegionalAvailAttr field to given value.

### HasRegionalAvailAttr

`func (o *DistributeChannelRateMappingType) HasRegionalAvailAttr() bool`

HasRegionalAvailAttr returns a boolean if a field has been set.

### GetRoomTypes

`func (o *DistributeChannelRateMappingType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *DistributeChannelRateMappingType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *DistributeChannelRateMappingType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *DistributeChannelRateMappingType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


