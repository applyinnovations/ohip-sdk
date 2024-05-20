# ChannelRateMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowRateUpdate** | Pointer to **bool** | Indicates if Rate updates to Channel are allowed. | [optional] 
**AllowRestrictionUpdate** | Pointer to **bool** | Indicates if Rate Restrictions are sent to an ADS, GDS, or ODS partner, such as Expedia, via the AVH messaging functionality. | [optional] 
**BeginDate** | Pointer to **string** | Begin date of the channel rate code mapping. | [optional] 
**BlockRateIndicator** | Pointer to **string** | Block Rate Indicator. | [optional] 
**BookingChannelCode** | Pointer to **string** | Booking Channel Code. | [optional] 
**CarrierInfo** | Pointer to [**CarrierInfoType**](CarrierInfoType.md) |  | [optional] 
**ChannelRatePlanCategory** | Pointer to **string** | Channel rate category of hotel-channel rate code mapping. | [optional] 
**ChannelRatePlanCode** | Pointer to **string** | Channel Room Type. | [optional] 
**ChannelRatePlanOrder** | Pointer to **float32** | Order of the channel rate type mapping. | [optional] 
**ChannelRatePlanWebName** | Pointer to **string** | Name of channel rate plan code to display on web. | [optional] 
**Description** | Pointer to [**ChannelRateMappingDescriptionType**](ChannelRateMappingDescriptionType.md) |  | [optional] 
**EndDate** | Pointer to **string** | End date of the channel rate code mapping. | [optional] 
**HasChannelNegotiatedRates** | Pointer to **bool** | True if the mapping has channel negotiated rates, otherwise false. | [optional] 
**HasNegotiatedRates** | Pointer to **bool** | True if this channel rate plan code has negotiated rates, otherwise false | [optional] 
**HotelId** | Pointer to **string** | Hotel Code. | [optional] 
**NewChannelRatePlanCode** | Pointer to **string** | New Channel Rate Plan Code of the mapping. Used only to change the Channel Rate Plan Code. | [optional] 
**PromotionCode** | Pointer to **string** | Promotion Code. | [optional] 
**RateLevel** | Pointer to **string** | Rate Level. | [optional] 
**RatePlanCode** | Pointer to **string** | Room Type. | [optional] 
**RatePlanInfo** | Pointer to [**RatePlanPrimaryDetailsType**](RatePlanPrimaryDetailsType.md) |  | [optional] 
**RateTierAttr** | Pointer to [**ChannelRateMappingTypeRateTierAttr**](ChannelRateMappingTypeRateTierAttr.md) |  | [optional] 
**RegionalAvailAttr** | Pointer to [**ChannelRateMappingTypeRegionalAvailAttr**](ChannelRateMappingTypeRegionalAvailAttr.md) |  | [optional] 
**RoomTypes** | Pointer to **[]string** |  | [optional] 

## Methods

### NewChannelRateMappingType

`func NewChannelRateMappingType() *ChannelRateMappingType`

NewChannelRateMappingType instantiates a new ChannelRateMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRateMappingTypeWithDefaults

`func NewChannelRateMappingTypeWithDefaults() *ChannelRateMappingType`

NewChannelRateMappingTypeWithDefaults instantiates a new ChannelRateMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowRateUpdate

`func (o *ChannelRateMappingType) GetAllowRateUpdate() bool`

GetAllowRateUpdate returns the AllowRateUpdate field if non-nil, zero value otherwise.

### GetAllowRateUpdateOk

`func (o *ChannelRateMappingType) GetAllowRateUpdateOk() (*bool, bool)`

GetAllowRateUpdateOk returns a tuple with the AllowRateUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRateUpdate

`func (o *ChannelRateMappingType) SetAllowRateUpdate(v bool)`

SetAllowRateUpdate sets AllowRateUpdate field to given value.

### HasAllowRateUpdate

`func (o *ChannelRateMappingType) HasAllowRateUpdate() bool`

HasAllowRateUpdate returns a boolean if a field has been set.

### GetAllowRestrictionUpdate

`func (o *ChannelRateMappingType) GetAllowRestrictionUpdate() bool`

GetAllowRestrictionUpdate returns the AllowRestrictionUpdate field if non-nil, zero value otherwise.

### GetAllowRestrictionUpdateOk

`func (o *ChannelRateMappingType) GetAllowRestrictionUpdateOk() (*bool, bool)`

GetAllowRestrictionUpdateOk returns a tuple with the AllowRestrictionUpdate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRestrictionUpdate

`func (o *ChannelRateMappingType) SetAllowRestrictionUpdate(v bool)`

SetAllowRestrictionUpdate sets AllowRestrictionUpdate field to given value.

### HasAllowRestrictionUpdate

`func (o *ChannelRateMappingType) HasAllowRestrictionUpdate() bool`

HasAllowRestrictionUpdate returns a boolean if a field has been set.

### GetBeginDate

`func (o *ChannelRateMappingType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *ChannelRateMappingType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *ChannelRateMappingType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *ChannelRateMappingType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetBlockRateIndicator

`func (o *ChannelRateMappingType) GetBlockRateIndicator() string`

GetBlockRateIndicator returns the BlockRateIndicator field if non-nil, zero value otherwise.

### GetBlockRateIndicatorOk

`func (o *ChannelRateMappingType) GetBlockRateIndicatorOk() (*string, bool)`

GetBlockRateIndicatorOk returns a tuple with the BlockRateIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRateIndicator

`func (o *ChannelRateMappingType) SetBlockRateIndicator(v string)`

SetBlockRateIndicator sets BlockRateIndicator field to given value.

### HasBlockRateIndicator

`func (o *ChannelRateMappingType) HasBlockRateIndicator() bool`

HasBlockRateIndicator returns a boolean if a field has been set.

### GetBookingChannelCode

`func (o *ChannelRateMappingType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ChannelRateMappingType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ChannelRateMappingType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ChannelRateMappingType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetCarrierInfo

`func (o *ChannelRateMappingType) GetCarrierInfo() CarrierInfoType`

GetCarrierInfo returns the CarrierInfo field if non-nil, zero value otherwise.

### GetCarrierInfoOk

`func (o *ChannelRateMappingType) GetCarrierInfoOk() (*CarrierInfoType, bool)`

GetCarrierInfoOk returns a tuple with the CarrierInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarrierInfo

`func (o *ChannelRateMappingType) SetCarrierInfo(v CarrierInfoType)`

SetCarrierInfo sets CarrierInfo field to given value.

### HasCarrierInfo

`func (o *ChannelRateMappingType) HasCarrierInfo() bool`

HasCarrierInfo returns a boolean if a field has been set.

### GetChannelRatePlanCategory

`func (o *ChannelRateMappingType) GetChannelRatePlanCategory() string`

GetChannelRatePlanCategory returns the ChannelRatePlanCategory field if non-nil, zero value otherwise.

### GetChannelRatePlanCategoryOk

`func (o *ChannelRateMappingType) GetChannelRatePlanCategoryOk() (*string, bool)`

GetChannelRatePlanCategoryOk returns a tuple with the ChannelRatePlanCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanCategory

`func (o *ChannelRateMappingType) SetChannelRatePlanCategory(v string)`

SetChannelRatePlanCategory sets ChannelRatePlanCategory field to given value.

### HasChannelRatePlanCategory

`func (o *ChannelRateMappingType) HasChannelRatePlanCategory() bool`

HasChannelRatePlanCategory returns a boolean if a field has been set.

### GetChannelRatePlanCode

`func (o *ChannelRateMappingType) GetChannelRatePlanCode() string`

GetChannelRatePlanCode returns the ChannelRatePlanCode field if non-nil, zero value otherwise.

### GetChannelRatePlanCodeOk

`func (o *ChannelRateMappingType) GetChannelRatePlanCodeOk() (*string, bool)`

GetChannelRatePlanCodeOk returns a tuple with the ChannelRatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanCode

`func (o *ChannelRateMappingType) SetChannelRatePlanCode(v string)`

SetChannelRatePlanCode sets ChannelRatePlanCode field to given value.

### HasChannelRatePlanCode

`func (o *ChannelRateMappingType) HasChannelRatePlanCode() bool`

HasChannelRatePlanCode returns a boolean if a field has been set.

### GetChannelRatePlanOrder

`func (o *ChannelRateMappingType) GetChannelRatePlanOrder() float32`

GetChannelRatePlanOrder returns the ChannelRatePlanOrder field if non-nil, zero value otherwise.

### GetChannelRatePlanOrderOk

`func (o *ChannelRateMappingType) GetChannelRatePlanOrderOk() (*float32, bool)`

GetChannelRatePlanOrderOk returns a tuple with the ChannelRatePlanOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanOrder

`func (o *ChannelRateMappingType) SetChannelRatePlanOrder(v float32)`

SetChannelRatePlanOrder sets ChannelRatePlanOrder field to given value.

### HasChannelRatePlanOrder

`func (o *ChannelRateMappingType) HasChannelRatePlanOrder() bool`

HasChannelRatePlanOrder returns a boolean if a field has been set.

### GetChannelRatePlanWebName

`func (o *ChannelRateMappingType) GetChannelRatePlanWebName() string`

GetChannelRatePlanWebName returns the ChannelRatePlanWebName field if non-nil, zero value otherwise.

### GetChannelRatePlanWebNameOk

`func (o *ChannelRateMappingType) GetChannelRatePlanWebNameOk() (*string, bool)`

GetChannelRatePlanWebNameOk returns a tuple with the ChannelRatePlanWebName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlanWebName

`func (o *ChannelRateMappingType) SetChannelRatePlanWebName(v string)`

SetChannelRatePlanWebName sets ChannelRatePlanWebName field to given value.

### HasChannelRatePlanWebName

`func (o *ChannelRateMappingType) HasChannelRatePlanWebName() bool`

HasChannelRatePlanWebName returns a boolean if a field has been set.

### GetDescription

`func (o *ChannelRateMappingType) GetDescription() ChannelRateMappingDescriptionType`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ChannelRateMappingType) GetDescriptionOk() (*ChannelRateMappingDescriptionType, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ChannelRateMappingType) SetDescription(v ChannelRateMappingDescriptionType)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ChannelRateMappingType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEndDate

`func (o *ChannelRateMappingType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ChannelRateMappingType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ChannelRateMappingType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ChannelRateMappingType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetHasChannelNegotiatedRates

`func (o *ChannelRateMappingType) GetHasChannelNegotiatedRates() bool`

GetHasChannelNegotiatedRates returns the HasChannelNegotiatedRates field if non-nil, zero value otherwise.

### GetHasChannelNegotiatedRatesOk

`func (o *ChannelRateMappingType) GetHasChannelNegotiatedRatesOk() (*bool, bool)`

GetHasChannelNegotiatedRatesOk returns a tuple with the HasChannelNegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasChannelNegotiatedRates

`func (o *ChannelRateMappingType) SetHasChannelNegotiatedRates(v bool)`

SetHasChannelNegotiatedRates sets HasChannelNegotiatedRates field to given value.

### HasHasChannelNegotiatedRates

`func (o *ChannelRateMappingType) HasHasChannelNegotiatedRates() bool`

HasHasChannelNegotiatedRates returns a boolean if a field has been set.

### GetHasNegotiatedRates

`func (o *ChannelRateMappingType) GetHasNegotiatedRates() bool`

GetHasNegotiatedRates returns the HasNegotiatedRates field if non-nil, zero value otherwise.

### GetHasNegotiatedRatesOk

`func (o *ChannelRateMappingType) GetHasNegotiatedRatesOk() (*bool, bool)`

GetHasNegotiatedRatesOk returns a tuple with the HasNegotiatedRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNegotiatedRates

`func (o *ChannelRateMappingType) SetHasNegotiatedRates(v bool)`

SetHasNegotiatedRates sets HasNegotiatedRates field to given value.

### HasHasNegotiatedRates

`func (o *ChannelRateMappingType) HasHasNegotiatedRates() bool`

HasHasNegotiatedRates returns a boolean if a field has been set.

### GetHotelId

`func (o *ChannelRateMappingType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChannelRateMappingType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChannelRateMappingType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChannelRateMappingType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNewChannelRatePlanCode

`func (o *ChannelRateMappingType) GetNewChannelRatePlanCode() string`

GetNewChannelRatePlanCode returns the NewChannelRatePlanCode field if non-nil, zero value otherwise.

### GetNewChannelRatePlanCodeOk

`func (o *ChannelRateMappingType) GetNewChannelRatePlanCodeOk() (*string, bool)`

GetNewChannelRatePlanCodeOk returns a tuple with the NewChannelRatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewChannelRatePlanCode

`func (o *ChannelRateMappingType) SetNewChannelRatePlanCode(v string)`

SetNewChannelRatePlanCode sets NewChannelRatePlanCode field to given value.

### HasNewChannelRatePlanCode

`func (o *ChannelRateMappingType) HasNewChannelRatePlanCode() bool`

HasNewChannelRatePlanCode returns a boolean if a field has been set.

### GetPromotionCode

`func (o *ChannelRateMappingType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *ChannelRateMappingType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *ChannelRateMappingType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *ChannelRateMappingType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetRateLevel

`func (o *ChannelRateMappingType) GetRateLevel() string`

GetRateLevel returns the RateLevel field if non-nil, zero value otherwise.

### GetRateLevelOk

`func (o *ChannelRateMappingType) GetRateLevelOk() (*string, bool)`

GetRateLevelOk returns a tuple with the RateLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLevel

`func (o *ChannelRateMappingType) SetRateLevel(v string)`

SetRateLevel sets RateLevel field to given value.

### HasRateLevel

`func (o *ChannelRateMappingType) HasRateLevel() bool`

HasRateLevel returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *ChannelRateMappingType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *ChannelRateMappingType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *ChannelRateMappingType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *ChannelRateMappingType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRatePlanInfo

`func (o *ChannelRateMappingType) GetRatePlanInfo() RatePlanPrimaryDetailsType`

GetRatePlanInfo returns the RatePlanInfo field if non-nil, zero value otherwise.

### GetRatePlanInfoOk

`func (o *ChannelRateMappingType) GetRatePlanInfoOk() (*RatePlanPrimaryDetailsType, bool)`

GetRatePlanInfoOk returns a tuple with the RatePlanInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanInfo

`func (o *ChannelRateMappingType) SetRatePlanInfo(v RatePlanPrimaryDetailsType)`

SetRatePlanInfo sets RatePlanInfo field to given value.

### HasRatePlanInfo

`func (o *ChannelRateMappingType) HasRatePlanInfo() bool`

HasRatePlanInfo returns a boolean if a field has been set.

### GetRateTierAttr

`func (o *ChannelRateMappingType) GetRateTierAttr() ChannelRateMappingTypeRateTierAttr`

GetRateTierAttr returns the RateTierAttr field if non-nil, zero value otherwise.

### GetRateTierAttrOk

`func (o *ChannelRateMappingType) GetRateTierAttrOk() (*ChannelRateMappingTypeRateTierAttr, bool)`

GetRateTierAttrOk returns a tuple with the RateTierAttr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateTierAttr

`func (o *ChannelRateMappingType) SetRateTierAttr(v ChannelRateMappingTypeRateTierAttr)`

SetRateTierAttr sets RateTierAttr field to given value.

### HasRateTierAttr

`func (o *ChannelRateMappingType) HasRateTierAttr() bool`

HasRateTierAttr returns a boolean if a field has been set.

### GetRegionalAvailAttr

`func (o *ChannelRateMappingType) GetRegionalAvailAttr() ChannelRateMappingTypeRegionalAvailAttr`

GetRegionalAvailAttr returns the RegionalAvailAttr field if non-nil, zero value otherwise.

### GetRegionalAvailAttrOk

`func (o *ChannelRateMappingType) GetRegionalAvailAttrOk() (*ChannelRateMappingTypeRegionalAvailAttr, bool)`

GetRegionalAvailAttrOk returns a tuple with the RegionalAvailAttr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionalAvailAttr

`func (o *ChannelRateMappingType) SetRegionalAvailAttr(v ChannelRateMappingTypeRegionalAvailAttr)`

SetRegionalAvailAttr sets RegionalAvailAttr field to given value.

### HasRegionalAvailAttr

`func (o *ChannelRateMappingType) HasRegionalAvailAttr() bool`

HasRegionalAvailAttr returns a boolean if a field has been set.

### GetRoomTypes

`func (o *ChannelRateMappingType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *ChannelRateMappingType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *ChannelRateMappingType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *ChannelRateMappingType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


