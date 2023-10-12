# BlockDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockCode** | Pointer to **string** | Block code for the block. | [optional] 
**BlockName** | Pointer to **string** | Name of the block. | [optional] 
**BlockAliases** | Pointer to **[]string** | List of Block Aliases. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**OriginalTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**ShoulderDates** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**ShoulderRatePlanCode** | Pointer to [**BlockDetailsTypeShoulderRatePlanCode**](BlockDetailsTypeShoulderRatePlanCode.md) |  | [optional] 
**BlockStatus** | Pointer to [**BookingStatusDetailType**](BookingStatusDetailType.md) |  | [optional] 
**BlockNextStatusList** | Pointer to [**[]BookingStatusDetailType**](BookingStatusDetailType.md) | Next booking status of the business block. | [optional] 
**BlockStatusChangeHistory** | Pointer to [**[]BookingStatusHistoryType**](BookingStatusHistoryType.md) | Collection of block status history. | [optional] 
**ReservationType** | Pointer to [**ReservationTypeInfoType**](ReservationTypeInfoType.md) |  | [optional] 
**MarketCode** | Pointer to [**MarketCodeInfoType**](MarketCodeInfoType.md) |  | [optional] 
**SourceOfSale** | Pointer to [**BlockSourceOfSaleType**](BlockSourceOfSaleType.md) |  | [optional] 
**ReservationMethod** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**BookingType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Status** | Pointer to **string** | Internal status for the block. | [optional] 
**BlockType** | Pointer to **string** | Internal type of the block. | [optional] 
**BlockOrigin** | Pointer to **string** | Origin information of the block PMS/ORS/SC/SFA | [optional] 
**PaymentMethod** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**CommissionPercent** | Pointer to **float32** | Indicate what percentage of this block is eligible for commission. | [optional] 
**ConversionCode** | Pointer to **string** | Indicates the likelihood description of the block moving to the next active block status. | [optional] 
**ConversionCodeDescription** | Pointer to **string** | Indicates the likelihood of the block moving to the next active block status. | [optional] 
**RateProtectionDetails** | Pointer to [**BlockRateProtectionType**](BlockRateProtectionType.md) |  | [optional] 
**NonCompeteDetails** | Pointer to [**BlockNonCompeteType**](BlockNonCompeteType.md) |  | [optional] 
**RankingCode** | Pointer to **string** | Indicates the ranking of the block. | [optional] 
**RankingCodeDescription** | Pointer to **string** | Indicates the ranking description of the block. | [optional] 
**CurrencyCode** | Pointer to **string** | Currency Code attached to the business block. | [optional] 
**CancellationDetails** | Pointer to [**CancellationDetailsType**](CancellationDetailsType.md) |  | [optional] 
**HotelName** | Pointer to **string** | A text field used to communicate the proper name of the hotel. | [optional] 
**TourCode** | Pointer to **string** | The tour code that this block belongs to, if the block is a part of a tour series. | [optional] 
**HotelUse** | Pointer to [**HotelUseType**](HotelUseType.md) |  | [optional] 
**RateOverrideReason** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**BlockClassification** | Pointer to [**BlockClassificationType**](BlockClassificationType.md) |  | [optional] 
**Synchronized** | Pointer to **bool** | Indicate if Master/Sub Blocks are Synchronized. | [optional] 
**SubBlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**PrimaryOwners** | Pointer to [**BlockDetailsTypePrimaryOwners**](BlockDetailsTypePrimaryOwners.md) |  | [optional] 
**PrimaryProfiles** | Pointer to [**BlockDetailsTypePrimaryProfiles**](BlockDetailsTypePrimaryProfiles.md) |  | [optional] 
**PrimaryRatePlanCodes** | Pointer to [**BlockDetailsTypePrimaryRatePlanCodes**](BlockDetailsTypePrimaryRatePlanCodes.md) |  | [optional] 
**CateringOnlyBlock** | Pointer to **bool** | Indicates if this is a catering only block. | [optional] 
**FlexibleDates** | Pointer to **bool** | Indicates if alternate dates are allowed for the booking. | [optional] 
**ExternalLocked** | Pointer to **bool** | Indicates if the block is locked by an external system. | [optional] 
**AutoloadContractGrid** | Pointer to **bool** | Indicates if contract grid will be auto loaded from original grid. | [optional] 
**AllowRateOverride** | Pointer to **bool** | Indicates whether rates of a block can be overridden. Applicable only for blocks with a Rate Code. | [optional] 
**ManualCutOff** | Pointer to **bool** | Indicates whether Block was cutoff manually. | [optional] 
**WholesaleBlock** | Pointer to **bool** | Indicates whether the business block should be considered as a wholesale block for revenue management block materialization forecasting | [optional] 
**ControlBlockLocally** | Pointer to **bool** | Determines whether or not the block can be managed at the CRS level. | [optional] 
**BusinessDateArrivalsExist** | Pointer to **bool** | Indicate whether arrivals exists on current business date. | [optional] 

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

### GetBlockAliases

`func (o *BlockDetailsType) GetBlockAliases() []string`

GetBlockAliases returns the BlockAliases field if non-nil, zero value otherwise.

### GetBlockAliasesOk

`func (o *BlockDetailsType) GetBlockAliasesOk() (*[]string, bool)`

GetBlockAliasesOk returns a tuple with the BlockAliases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAliases

`func (o *BlockDetailsType) SetBlockAliases(v []string)`

SetBlockAliases sets BlockAliases field to given value.

### HasBlockAliases

`func (o *BlockDetailsType) HasBlockAliases() bool`

HasBlockAliases returns a boolean if a field has been set.

### GetTimeSpan

`func (o *BlockDetailsType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *BlockDetailsType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *BlockDetailsType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *BlockDetailsType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetOriginalTimeSpan

`func (o *BlockDetailsType) GetOriginalTimeSpan() TimeSpanType`

GetOriginalTimeSpan returns the OriginalTimeSpan field if non-nil, zero value otherwise.

### GetOriginalTimeSpanOk

`func (o *BlockDetailsType) GetOriginalTimeSpanOk() (*TimeSpanType, bool)`

GetOriginalTimeSpanOk returns a tuple with the OriginalTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalTimeSpan

`func (o *BlockDetailsType) SetOriginalTimeSpan(v TimeSpanType)`

SetOriginalTimeSpan sets OriginalTimeSpan field to given value.

### HasOriginalTimeSpan

`func (o *BlockDetailsType) HasOriginalTimeSpan() bool`

HasOriginalTimeSpan returns a boolean if a field has been set.

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

### GetShoulderRatePlanCode

`func (o *BlockDetailsType) GetShoulderRatePlanCode() BlockDetailsTypeShoulderRatePlanCode`

GetShoulderRatePlanCode returns the ShoulderRatePlanCode field if non-nil, zero value otherwise.

### GetShoulderRatePlanCodeOk

`func (o *BlockDetailsType) GetShoulderRatePlanCodeOk() (*BlockDetailsTypeShoulderRatePlanCode, bool)`

GetShoulderRatePlanCodeOk returns a tuple with the ShoulderRatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShoulderRatePlanCode

`func (o *BlockDetailsType) SetShoulderRatePlanCode(v BlockDetailsTypeShoulderRatePlanCode)`

SetShoulderRatePlanCode sets ShoulderRatePlanCode field to given value.

### HasShoulderRatePlanCode

`func (o *BlockDetailsType) HasShoulderRatePlanCode() bool`

HasShoulderRatePlanCode returns a boolean if a field has been set.

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

### GetBlockNextStatusList

`func (o *BlockDetailsType) GetBlockNextStatusList() []BookingStatusDetailType`

GetBlockNextStatusList returns the BlockNextStatusList field if non-nil, zero value otherwise.

### GetBlockNextStatusListOk

`func (o *BlockDetailsType) GetBlockNextStatusListOk() (*[]BookingStatusDetailType, bool)`

GetBlockNextStatusListOk returns a tuple with the BlockNextStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockNextStatusList

`func (o *BlockDetailsType) SetBlockNextStatusList(v []BookingStatusDetailType)`

SetBlockNextStatusList sets BlockNextStatusList field to given value.

### HasBlockNextStatusList

`func (o *BlockDetailsType) HasBlockNextStatusList() bool`

HasBlockNextStatusList returns a boolean if a field has been set.

### GetBlockStatusChangeHistory

`func (o *BlockDetailsType) GetBlockStatusChangeHistory() []BookingStatusHistoryType`

GetBlockStatusChangeHistory returns the BlockStatusChangeHistory field if non-nil, zero value otherwise.

### GetBlockStatusChangeHistoryOk

`func (o *BlockDetailsType) GetBlockStatusChangeHistoryOk() (*[]BookingStatusHistoryType, bool)`

GetBlockStatusChangeHistoryOk returns a tuple with the BlockStatusChangeHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatusChangeHistory

`func (o *BlockDetailsType) SetBlockStatusChangeHistory(v []BookingStatusHistoryType)`

SetBlockStatusChangeHistory sets BlockStatusChangeHistory field to given value.

### HasBlockStatusChangeHistory

`func (o *BlockDetailsType) HasBlockStatusChangeHistory() bool`

HasBlockStatusChangeHistory returns a boolean if a field has been set.

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

### GetReservationMethod

`func (o *BlockDetailsType) GetReservationMethod() CodeDescriptionType`

GetReservationMethod returns the ReservationMethod field if non-nil, zero value otherwise.

### GetReservationMethodOk

`func (o *BlockDetailsType) GetReservationMethodOk() (*CodeDescriptionType, bool)`

GetReservationMethodOk returns a tuple with the ReservationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationMethod

`func (o *BlockDetailsType) SetReservationMethod(v CodeDescriptionType)`

SetReservationMethod sets ReservationMethod field to given value.

### HasReservationMethod

`func (o *BlockDetailsType) HasReservationMethod() bool`

HasReservationMethod returns a boolean if a field has been set.

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

### GetBlockOrigin

`func (o *BlockDetailsType) GetBlockOrigin() string`

GetBlockOrigin returns the BlockOrigin field if non-nil, zero value otherwise.

### GetBlockOriginOk

`func (o *BlockDetailsType) GetBlockOriginOk() (*string, bool)`

GetBlockOriginOk returns a tuple with the BlockOrigin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockOrigin

`func (o *BlockDetailsType) SetBlockOrigin(v string)`

SetBlockOrigin sets BlockOrigin field to given value.

### HasBlockOrigin

`func (o *BlockDetailsType) HasBlockOrigin() bool`

HasBlockOrigin returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *BlockDetailsType) GetPaymentMethod() CodeDescriptionType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *BlockDetailsType) GetPaymentMethodOk() (*CodeDescriptionType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *BlockDetailsType) SetPaymentMethod(v CodeDescriptionType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *BlockDetailsType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetCommissionPercent

`func (o *BlockDetailsType) GetCommissionPercent() float32`

GetCommissionPercent returns the CommissionPercent field if non-nil, zero value otherwise.

### GetCommissionPercentOk

`func (o *BlockDetailsType) GetCommissionPercentOk() (*float32, bool)`

GetCommissionPercentOk returns a tuple with the CommissionPercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionPercent

`func (o *BlockDetailsType) SetCommissionPercent(v float32)`

SetCommissionPercent sets CommissionPercent field to given value.

### HasCommissionPercent

`func (o *BlockDetailsType) HasCommissionPercent() bool`

HasCommissionPercent returns a boolean if a field has been set.

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

### GetCancellationDetails

`func (o *BlockDetailsType) GetCancellationDetails() CancellationDetailsType`

GetCancellationDetails returns the CancellationDetails field if non-nil, zero value otherwise.

### GetCancellationDetailsOk

`func (o *BlockDetailsType) GetCancellationDetailsOk() (*CancellationDetailsType, bool)`

GetCancellationDetailsOk returns a tuple with the CancellationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationDetails

`func (o *BlockDetailsType) SetCancellationDetails(v CancellationDetailsType)`

SetCancellationDetails sets CancellationDetails field to given value.

### HasCancellationDetails

`func (o *BlockDetailsType) HasCancellationDetails() bool`

HasCancellationDetails returns a boolean if a field has been set.

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

### GetTourCode

`func (o *BlockDetailsType) GetTourCode() string`

GetTourCode returns the TourCode field if non-nil, zero value otherwise.

### GetTourCodeOk

`func (o *BlockDetailsType) GetTourCodeOk() (*string, bool)`

GetTourCodeOk returns a tuple with the TourCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTourCode

`func (o *BlockDetailsType) SetTourCode(v string)`

SetTourCode sets TourCode field to given value.

### HasTourCode

`func (o *BlockDetailsType) HasTourCode() bool`

HasTourCode returns a boolean if a field has been set.

### GetHotelUse

`func (o *BlockDetailsType) GetHotelUse() HotelUseType`

GetHotelUse returns the HotelUse field if non-nil, zero value otherwise.

### GetHotelUseOk

`func (o *BlockDetailsType) GetHotelUseOk() (*HotelUseType, bool)`

GetHotelUseOk returns a tuple with the HotelUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelUse

`func (o *BlockDetailsType) SetHotelUse(v HotelUseType)`

SetHotelUse sets HotelUse field to given value.

### HasHotelUse

`func (o *BlockDetailsType) HasHotelUse() bool`

HasHotelUse returns a boolean if a field has been set.

### GetRateOverrideReason

`func (o *BlockDetailsType) GetRateOverrideReason() CodeDescriptionType`

GetRateOverrideReason returns the RateOverrideReason field if non-nil, zero value otherwise.

### GetRateOverrideReasonOk

`func (o *BlockDetailsType) GetRateOverrideReasonOk() (*CodeDescriptionType, bool)`

GetRateOverrideReasonOk returns a tuple with the RateOverrideReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateOverrideReason

`func (o *BlockDetailsType) SetRateOverrideReason(v CodeDescriptionType)`

SetRateOverrideReason sets RateOverrideReason field to given value.

### HasRateOverrideReason

`func (o *BlockDetailsType) HasRateOverrideReason() bool`

HasRateOverrideReason returns a boolean if a field has been set.

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

### GetSynchronized

`func (o *BlockDetailsType) GetSynchronized() bool`

GetSynchronized returns the Synchronized field if non-nil, zero value otherwise.

### GetSynchronizedOk

`func (o *BlockDetailsType) GetSynchronizedOk() (*bool, bool)`

GetSynchronizedOk returns a tuple with the Synchronized field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynchronized

`func (o *BlockDetailsType) SetSynchronized(v bool)`

SetSynchronized sets Synchronized field to given value.

### HasSynchronized

`func (o *BlockDetailsType) HasSynchronized() bool`

HasSynchronized returns a boolean if a field has been set.

### GetSubBlockIdList

`func (o *BlockDetailsType) GetSubBlockIdList() []UniqueIDType`

GetSubBlockIdList returns the SubBlockIdList field if non-nil, zero value otherwise.

### GetSubBlockIdListOk

`func (o *BlockDetailsType) GetSubBlockIdListOk() (*[]UniqueIDType, bool)`

GetSubBlockIdListOk returns a tuple with the SubBlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubBlockIdList

`func (o *BlockDetailsType) SetSubBlockIdList(v []UniqueIDType)`

SetSubBlockIdList sets SubBlockIdList field to given value.

### HasSubBlockIdList

`func (o *BlockDetailsType) HasSubBlockIdList() bool`

HasSubBlockIdList returns a boolean if a field has been set.

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

### GetPrimaryRatePlanCodes

`func (o *BlockDetailsType) GetPrimaryRatePlanCodes() BlockDetailsTypePrimaryRatePlanCodes`

GetPrimaryRatePlanCodes returns the PrimaryRatePlanCodes field if non-nil, zero value otherwise.

### GetPrimaryRatePlanCodesOk

`func (o *BlockDetailsType) GetPrimaryRatePlanCodesOk() (*BlockDetailsTypePrimaryRatePlanCodes, bool)`

GetPrimaryRatePlanCodesOk returns a tuple with the PrimaryRatePlanCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryRatePlanCodes

`func (o *BlockDetailsType) SetPrimaryRatePlanCodes(v BlockDetailsTypePrimaryRatePlanCodes)`

SetPrimaryRatePlanCodes sets PrimaryRatePlanCodes field to given value.

### HasPrimaryRatePlanCodes

`func (o *BlockDetailsType) HasPrimaryRatePlanCodes() bool`

HasPrimaryRatePlanCodes returns a boolean if a field has been set.

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

### GetAutoloadContractGrid

`func (o *BlockDetailsType) GetAutoloadContractGrid() bool`

GetAutoloadContractGrid returns the AutoloadContractGrid field if non-nil, zero value otherwise.

### GetAutoloadContractGridOk

`func (o *BlockDetailsType) GetAutoloadContractGridOk() (*bool, bool)`

GetAutoloadContractGridOk returns a tuple with the AutoloadContractGrid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoloadContractGrid

`func (o *BlockDetailsType) SetAutoloadContractGrid(v bool)`

SetAutoloadContractGrid sets AutoloadContractGrid field to given value.

### HasAutoloadContractGrid

`func (o *BlockDetailsType) HasAutoloadContractGrid() bool`

HasAutoloadContractGrid returns a boolean if a field has been set.

### GetAllowRateOverride

`func (o *BlockDetailsType) GetAllowRateOverride() bool`

GetAllowRateOverride returns the AllowRateOverride field if non-nil, zero value otherwise.

### GetAllowRateOverrideOk

`func (o *BlockDetailsType) GetAllowRateOverrideOk() (*bool, bool)`

GetAllowRateOverrideOk returns a tuple with the AllowRateOverride field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRateOverride

`func (o *BlockDetailsType) SetAllowRateOverride(v bool)`

SetAllowRateOverride sets AllowRateOverride field to given value.

### HasAllowRateOverride

`func (o *BlockDetailsType) HasAllowRateOverride() bool`

HasAllowRateOverride returns a boolean if a field has been set.

### GetManualCutOff

`func (o *BlockDetailsType) GetManualCutOff() bool`

GetManualCutOff returns the ManualCutOff field if non-nil, zero value otherwise.

### GetManualCutOffOk

`func (o *BlockDetailsType) GetManualCutOffOk() (*bool, bool)`

GetManualCutOffOk returns a tuple with the ManualCutOff field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualCutOff

`func (o *BlockDetailsType) SetManualCutOff(v bool)`

SetManualCutOff sets ManualCutOff field to given value.

### HasManualCutOff

`func (o *BlockDetailsType) HasManualCutOff() bool`

HasManualCutOff returns a boolean if a field has been set.

### GetWholesaleBlock

`func (o *BlockDetailsType) GetWholesaleBlock() bool`

GetWholesaleBlock returns the WholesaleBlock field if non-nil, zero value otherwise.

### GetWholesaleBlockOk

`func (o *BlockDetailsType) GetWholesaleBlockOk() (*bool, bool)`

GetWholesaleBlockOk returns a tuple with the WholesaleBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWholesaleBlock

`func (o *BlockDetailsType) SetWholesaleBlock(v bool)`

SetWholesaleBlock sets WholesaleBlock field to given value.

### HasWholesaleBlock

`func (o *BlockDetailsType) HasWholesaleBlock() bool`

HasWholesaleBlock returns a boolean if a field has been set.

### GetControlBlockLocally

`func (o *BlockDetailsType) GetControlBlockLocally() bool`

GetControlBlockLocally returns the ControlBlockLocally field if non-nil, zero value otherwise.

### GetControlBlockLocallyOk

`func (o *BlockDetailsType) GetControlBlockLocallyOk() (*bool, bool)`

GetControlBlockLocallyOk returns a tuple with the ControlBlockLocally field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControlBlockLocally

`func (o *BlockDetailsType) SetControlBlockLocally(v bool)`

SetControlBlockLocally sets ControlBlockLocally field to given value.

### HasControlBlockLocally

`func (o *BlockDetailsType) HasControlBlockLocally() bool`

HasControlBlockLocally returns a boolean if a field has been set.

### GetBusinessDateArrivalsExist

`func (o *BlockDetailsType) GetBusinessDateArrivalsExist() bool`

GetBusinessDateArrivalsExist returns the BusinessDateArrivalsExist field if non-nil, zero value otherwise.

### GetBusinessDateArrivalsExistOk

`func (o *BlockDetailsType) GetBusinessDateArrivalsExistOk() (*bool, bool)`

GetBusinessDateArrivalsExistOk returns a tuple with the BusinessDateArrivalsExist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessDateArrivalsExist

`func (o *BlockDetailsType) SetBusinessDateArrivalsExist(v bool)`

SetBusinessDateArrivalsExist sets BusinessDateArrivalsExist field to given value.

### HasBusinessDateArrivalsExist

`func (o *BlockDetailsType) HasBusinessDateArrivalsExist() bool`

HasBusinessDateArrivalsExist returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


