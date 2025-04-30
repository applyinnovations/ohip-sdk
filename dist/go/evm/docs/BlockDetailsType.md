# BlockDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockCode** | Pointer to **string** | Block code for the block. | [optional] 
**BlockName** | Pointer to **string** | Name of the block. | [optional] 
**BlockDates** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**ShoulderDates** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**BlockStatus** | Pointer to [**BookingStatusDetailType**](BookingStatusDetailType.md) |  | [optional] 
**ReservationType** | Pointer to [**ReservationTypeInfoType**](ReservationTypeInfoType.md) |  | [optional] 
**MarketCode** | Pointer to [**MarketCodeInfoType**](MarketCodeInfoType.md) |  | [optional] 
**SourceOfSale** | Pointer to [**BlockSourceOfSaleType**](BlockSourceOfSaleType.md) |  | [optional] 
**BookingType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Status** | Pointer to **string** | Internal status for the block. | [optional] 
**BlockType** | Pointer to **string** | Internal type of the block. | [optional] 
**ConversionCode** | Pointer to **string** | Indicates the likelihood description of the block moving to the next active block status. | [optional] 
**ConversionCodeDescription** | Pointer to **string** | Indicates the likelihood of the block moving to the next active block status. | [optional] 
**RateProtectionDetails** | Pointer to [**BlockRateProtectionType**](BlockRateProtectionType.md) |  | [optional] 
**NonCompeteDetails** | Pointer to [**BlockNonCompeteType**](BlockNonCompeteType.md) |  | [optional] 
**RankingCode** | Pointer to **string** | Indicates the ranking of the block. | [optional] 
**RankingCodeDescription** | Pointer to **string** | Indicates the ranking description of the block. | [optional] 
**CurrencyCode** | Pointer to **string** | Currency Code attached to the business block. | [optional] 
**HotelName** | Pointer to **string** | A text field used to communicate the proper name of the hotel. | [optional] 
**BlockClassification** | Pointer to [**BlockClassificationType**](BlockClassificationType.md) |  | [optional] 
**PrimaryOwners** | Pointer to [**BlockDetailsTypePrimaryOwners**](BlockDetailsTypePrimaryOwners.md) |  | [optional] 
**PrimaryProfiles** | Pointer to [**BlockDetailsTypePrimaryProfiles**](BlockDetailsTypePrimaryProfiles.md) |  | [optional] 
**CateringOnlyBlock** | Pointer to **bool** | Indicates if this is a catering only block. | [optional] 
**FlexibleDates** | Pointer to **bool** | Indicates if alternate dates are allowed for the booking. | [optional] 
**ExternalLocked** | Pointer to **bool** | Indicates if the block is locked by an external system. | [optional] 

## Methods

### NewBlockDetailsType

`func NewBlockDetailsType() *BlockDetailsType`

NewBlockDetailsType instantiates a new BlockDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockDetailsTypeWithDefaults

`func NewBlockDetailsTypeWithDefaults() *BlockDetailsType`

NewBlockDetailsTypeWithDefaults instantiates a new BlockDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockCode

`func (o *BlockDetailsType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *BlockDetailsType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *BlockDetailsType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *BlockDetailsType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetBlockName

`func (o *BlockDetailsType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *BlockDetailsType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *BlockDetailsType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *BlockDetailsType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetBlockDates

`func (o *BlockDetailsType) GetBlockDates() TimeSpanType`

GetBlockDates returns the BlockDates field if non-nil, zero value otherwise.

### GetBlockDatesOk

`func (o *BlockDetailsType) GetBlockDatesOk() (*TimeSpanType, bool)`

GetBlockDatesOk returns a tuple with the BlockDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockDates

`func (o *BlockDetailsType) SetBlockDates(v TimeSpanType)`

SetBlockDates sets BlockDates field to given value.

### HasBlockDates

`func (o *BlockDetailsType) HasBlockDates() bool`

HasBlockDates returns a boolean if a field has been set.

### GetShoulderDates

`func (o *BlockDetailsType) GetShoulderDates() TimeSpanType`

GetShoulderDates returns the ShoulderDates field if non-nil, zero value otherwise.

### GetShoulderDatesOk

`func (o *BlockDetailsType) GetShoulderDatesOk() (*TimeSpanType, bool)`

GetShoulderDatesOk returns a tuple with the ShoulderDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShoulderDates

`func (o *BlockDetailsType) SetShoulderDates(v TimeSpanType)`

SetShoulderDates sets ShoulderDates field to given value.

### HasShoulderDates

`func (o *BlockDetailsType) HasShoulderDates() bool`

HasShoulderDates returns a boolean if a field has been set.

### GetBlockStatus

`func (o *BlockDetailsType) GetBlockStatus() BookingStatusDetailType`

GetBlockStatus returns the BlockStatus field if non-nil, zero value otherwise.

### GetBlockStatusOk

`func (o *BlockDetailsType) GetBlockStatusOk() (*BookingStatusDetailType, bool)`

GetBlockStatusOk returns a tuple with the BlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatus

`func (o *BlockDetailsType) SetBlockStatus(v BookingStatusDetailType)`

SetBlockStatus sets BlockStatus field to given value.

### HasBlockStatus

`func (o *BlockDetailsType) HasBlockStatus() bool`

HasBlockStatus returns a boolean if a field has been set.

### GetReservationType

`func (o *BlockDetailsType) GetReservationType() ReservationTypeInfoType`

GetReservationType returns the ReservationType field if non-nil, zero value otherwise.

### GetReservationTypeOk

`func (o *BlockDetailsType) GetReservationTypeOk() (*ReservationTypeInfoType, bool)`

GetReservationTypeOk returns a tuple with the ReservationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationType

`func (o *BlockDetailsType) SetReservationType(v ReservationTypeInfoType)`

SetReservationType sets ReservationType field to given value.

### HasReservationType

`func (o *BlockDetailsType) HasReservationType() bool`

HasReservationType returns a boolean if a field has been set.

### GetMarketCode

`func (o *BlockDetailsType) GetMarketCode() MarketCodeInfoType`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *BlockDetailsType) GetMarketCodeOk() (*MarketCodeInfoType, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *BlockDetailsType) SetMarketCode(v MarketCodeInfoType)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *BlockDetailsType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetSourceOfSale

`func (o *BlockDetailsType) GetSourceOfSale() BlockSourceOfSaleType`

GetSourceOfSale returns the SourceOfSale field if non-nil, zero value otherwise.

### GetSourceOfSaleOk

`func (o *BlockDetailsType) GetSourceOfSaleOk() (*BlockSourceOfSaleType, bool)`

GetSourceOfSaleOk returns a tuple with the SourceOfSale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOfSale

`func (o *BlockDetailsType) SetSourceOfSale(v BlockSourceOfSaleType)`

SetSourceOfSale sets SourceOfSale field to given value.

### HasSourceOfSale

`func (o *BlockDetailsType) HasSourceOfSale() bool`

HasSourceOfSale returns a boolean if a field has been set.

### GetBookingType

`func (o *BlockDetailsType) GetBookingType() CodeDescriptionType`

GetBookingType returns the BookingType field if non-nil, zero value otherwise.

### GetBookingTypeOk

`func (o *BlockDetailsType) GetBookingTypeOk() (*CodeDescriptionType, bool)`

GetBookingTypeOk returns a tuple with the BookingType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingType

`func (o *BlockDetailsType) SetBookingType(v CodeDescriptionType)`

SetBookingType sets BookingType field to given value.

### HasBookingType

`func (o *BlockDetailsType) HasBookingType() bool`

HasBookingType returns a boolean if a field has been set.

### GetStatus

`func (o *BlockDetailsType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BlockDetailsType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BlockDetailsType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *BlockDetailsType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetBlockType

`func (o *BlockDetailsType) GetBlockType() string`

GetBlockType returns the BlockType field if non-nil, zero value otherwise.

### GetBlockTypeOk

`func (o *BlockDetailsType) GetBlockTypeOk() (*string, bool)`

GetBlockTypeOk returns a tuple with the BlockType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockType

`func (o *BlockDetailsType) SetBlockType(v string)`

SetBlockType sets BlockType field to given value.

### HasBlockType

`func (o *BlockDetailsType) HasBlockType() bool`

HasBlockType returns a boolean if a field has been set.

### GetConversionCode

`func (o *BlockDetailsType) GetConversionCode() string`

GetConversionCode returns the ConversionCode field if non-nil, zero value otherwise.

### GetConversionCodeOk

`func (o *BlockDetailsType) GetConversionCodeOk() (*string, bool)`

GetConversionCodeOk returns a tuple with the ConversionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCode

`func (o *BlockDetailsType) SetConversionCode(v string)`

SetConversionCode sets ConversionCode field to given value.

### HasConversionCode

`func (o *BlockDetailsType) HasConversionCode() bool`

HasConversionCode returns a boolean if a field has been set.

### GetConversionCodeDescription

`func (o *BlockDetailsType) GetConversionCodeDescription() string`

GetConversionCodeDescription returns the ConversionCodeDescription field if non-nil, zero value otherwise.

### GetConversionCodeDescriptionOk

`func (o *BlockDetailsType) GetConversionCodeDescriptionOk() (*string, bool)`

GetConversionCodeDescriptionOk returns a tuple with the ConversionCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCodeDescription

`func (o *BlockDetailsType) SetConversionCodeDescription(v string)`

SetConversionCodeDescription sets ConversionCodeDescription field to given value.

### HasConversionCodeDescription

`func (o *BlockDetailsType) HasConversionCodeDescription() bool`

HasConversionCodeDescription returns a boolean if a field has been set.

### GetRateProtectionDetails

`func (o *BlockDetailsType) GetRateProtectionDetails() BlockRateProtectionType`

GetRateProtectionDetails returns the RateProtectionDetails field if non-nil, zero value otherwise.

### GetRateProtectionDetailsOk

`func (o *BlockDetailsType) GetRateProtectionDetailsOk() (*BlockRateProtectionType, bool)`

GetRateProtectionDetailsOk returns a tuple with the RateProtectionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateProtectionDetails

`func (o *BlockDetailsType) SetRateProtectionDetails(v BlockRateProtectionType)`

SetRateProtectionDetails sets RateProtectionDetails field to given value.

### HasRateProtectionDetails

`func (o *BlockDetailsType) HasRateProtectionDetails() bool`

HasRateProtectionDetails returns a boolean if a field has been set.

### GetNonCompeteDetails

`func (o *BlockDetailsType) GetNonCompeteDetails() BlockNonCompeteType`

GetNonCompeteDetails returns the NonCompeteDetails field if non-nil, zero value otherwise.

### GetNonCompeteDetailsOk

`func (o *BlockDetailsType) GetNonCompeteDetailsOk() (*BlockNonCompeteType, bool)`

GetNonCompeteDetailsOk returns a tuple with the NonCompeteDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonCompeteDetails

`func (o *BlockDetailsType) SetNonCompeteDetails(v BlockNonCompeteType)`

SetNonCompeteDetails sets NonCompeteDetails field to given value.

### HasNonCompeteDetails

`func (o *BlockDetailsType) HasNonCompeteDetails() bool`

HasNonCompeteDetails returns a boolean if a field has been set.

### GetRankingCode

`func (o *BlockDetailsType) GetRankingCode() string`

GetRankingCode returns the RankingCode field if non-nil, zero value otherwise.

### GetRankingCodeOk

`func (o *BlockDetailsType) GetRankingCodeOk() (*string, bool)`

GetRankingCodeOk returns a tuple with the RankingCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRankingCode

`func (o *BlockDetailsType) SetRankingCode(v string)`

SetRankingCode sets RankingCode field to given value.

### HasRankingCode

`func (o *BlockDetailsType) HasRankingCode() bool`

HasRankingCode returns a boolean if a field has been set.

### GetRankingCodeDescription

`func (o *BlockDetailsType) GetRankingCodeDescription() string`

GetRankingCodeDescription returns the RankingCodeDescription field if non-nil, zero value otherwise.

### GetRankingCodeDescriptionOk

`func (o *BlockDetailsType) GetRankingCodeDescriptionOk() (*string, bool)`

GetRankingCodeDescriptionOk returns a tuple with the RankingCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRankingCodeDescription

`func (o *BlockDetailsType) SetRankingCodeDescription(v string)`

SetRankingCodeDescription sets RankingCodeDescription field to given value.

### HasRankingCodeDescription

`func (o *BlockDetailsType) HasRankingCodeDescription() bool`

HasRankingCodeDescription returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *BlockDetailsType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *BlockDetailsType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *BlockDetailsType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *BlockDetailsType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetHotelName

`func (o *BlockDetailsType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *BlockDetailsType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *BlockDetailsType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *BlockDetailsType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetBlockClassification

`func (o *BlockDetailsType) GetBlockClassification() BlockClassificationType`

GetBlockClassification returns the BlockClassification field if non-nil, zero value otherwise.

### GetBlockClassificationOk

`func (o *BlockDetailsType) GetBlockClassificationOk() (*BlockClassificationType, bool)`

GetBlockClassificationOk returns a tuple with the BlockClassification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockClassification

`func (o *BlockDetailsType) SetBlockClassification(v BlockClassificationType)`

SetBlockClassification sets BlockClassification field to given value.

### HasBlockClassification

`func (o *BlockDetailsType) HasBlockClassification() bool`

HasBlockClassification returns a boolean if a field has been set.

### GetPrimaryOwners

`func (o *BlockDetailsType) GetPrimaryOwners() BlockDetailsTypePrimaryOwners`

GetPrimaryOwners returns the PrimaryOwners field if non-nil, zero value otherwise.

### GetPrimaryOwnersOk

`func (o *BlockDetailsType) GetPrimaryOwnersOk() (*BlockDetailsTypePrimaryOwners, bool)`

GetPrimaryOwnersOk returns a tuple with the PrimaryOwners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryOwners

`func (o *BlockDetailsType) SetPrimaryOwners(v BlockDetailsTypePrimaryOwners)`

SetPrimaryOwners sets PrimaryOwners field to given value.

### HasPrimaryOwners

`func (o *BlockDetailsType) HasPrimaryOwners() bool`

HasPrimaryOwners returns a boolean if a field has been set.

### GetPrimaryProfiles

`func (o *BlockDetailsType) GetPrimaryProfiles() BlockDetailsTypePrimaryProfiles`

GetPrimaryProfiles returns the PrimaryProfiles field if non-nil, zero value otherwise.

### GetPrimaryProfilesOk

`func (o *BlockDetailsType) GetPrimaryProfilesOk() (*BlockDetailsTypePrimaryProfiles, bool)`

GetPrimaryProfilesOk returns a tuple with the PrimaryProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryProfiles

`func (o *BlockDetailsType) SetPrimaryProfiles(v BlockDetailsTypePrimaryProfiles)`

SetPrimaryProfiles sets PrimaryProfiles field to given value.

### HasPrimaryProfiles

`func (o *BlockDetailsType) HasPrimaryProfiles() bool`

HasPrimaryProfiles returns a boolean if a field has been set.

### GetCateringOnlyBlock

`func (o *BlockDetailsType) GetCateringOnlyBlock() bool`

GetCateringOnlyBlock returns the CateringOnlyBlock field if non-nil, zero value otherwise.

### GetCateringOnlyBlockOk

`func (o *BlockDetailsType) GetCateringOnlyBlockOk() (*bool, bool)`

GetCateringOnlyBlockOk returns a tuple with the CateringOnlyBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringOnlyBlock

`func (o *BlockDetailsType) SetCateringOnlyBlock(v bool)`

SetCateringOnlyBlock sets CateringOnlyBlock field to given value.

### HasCateringOnlyBlock

`func (o *BlockDetailsType) HasCateringOnlyBlock() bool`

HasCateringOnlyBlock returns a boolean if a field has been set.

### GetFlexibleDates

`func (o *BlockDetailsType) GetFlexibleDates() bool`

GetFlexibleDates returns the FlexibleDates field if non-nil, zero value otherwise.

### GetFlexibleDatesOk

`func (o *BlockDetailsType) GetFlexibleDatesOk() (*bool, bool)`

GetFlexibleDatesOk returns a tuple with the FlexibleDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlexibleDates

`func (o *BlockDetailsType) SetFlexibleDates(v bool)`

SetFlexibleDates sets FlexibleDates field to given value.

### HasFlexibleDates

`func (o *BlockDetailsType) HasFlexibleDates() bool`

HasFlexibleDates returns a boolean if a field has been set.

### GetExternalLocked

`func (o *BlockDetailsType) GetExternalLocked() bool`

GetExternalLocked returns the ExternalLocked field if non-nil, zero value otherwise.

### GetExternalLockedOk

`func (o *BlockDetailsType) GetExternalLockedOk() (*bool, bool)`

GetExternalLockedOk returns a tuple with the ExternalLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalLocked

`func (o *BlockDetailsType) SetExternalLocked(v bool)`

SetExternalLocked sets ExternalLocked field to given value.

### HasExternalLocked

`func (o *BlockDetailsType) HasExternalLocked() bool`

HasExternalLocked returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


