# BlockInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The hotel code of the business block. | [optional] 
**BlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**BlockName** | Pointer to **string** | Name of the business block. | [optional] 
**BlockCode** | Pointer to **string** | Block code for the block. | [optional] 
**StartDate** | Pointer to **string** | Start date for this block. | [optional] 
**EndDate** | Pointer to **string** | End date for this block. | [optional] 
**CutOffDate** | Pointer to **string** | Date after which unused block rooms should be returned to house. | [optional] 
**BlockStatus** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**BlockStatusColor** | Pointer to [**StatusColorType**](StatusColorType.md) |  | [optional] 
**AccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AccountName** | Pointer to **string** | Account name attached to the business block. | [optional] 
**ContactId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ContactName** | Pointer to **string** | Contact name attached to the business block. | [optional] 
**RoomSalesManager** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**CurrencyCode** | Pointer to **string** | Currency Code attached to the business block. | [optional] 
**AverageRoomRate** | Pointer to **float32** | Average room rate of the business block. | [optional] 
**ConversionCode** | Pointer to **string** | Indicates the likelihood of the block moving to the next active block status. | [optional] 
**RankingCode** | Pointer to **string** | Indicates the ranking of the block. | [optional] 
**GuaranteeCode** | Pointer to **string** | Guarantee Code for the block. | [optional] 
**RateProtectionDetails** | Pointer to [**BlockRateProtectionType**](BlockRateProtectionType.md) |  | [optional] 
**NonCompeteDetails** | Pointer to [**BlockNonCompeteType**](BlockNonCompeteType.md) |  | [optional] 
**BlockClassification** | Pointer to [**BlockClassificationType**](BlockClassificationType.md) |  | [optional] 

## Methods

### NewBlockInfoType

`func NewBlockInfoType() *BlockInfoType`

NewBlockInfoType instantiates a new BlockInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockInfoTypeWithDefaults

`func NewBlockInfoTypeWithDefaults() *BlockInfoType`

NewBlockInfoTypeWithDefaults instantiates a new BlockInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BlockInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBlockId

`func (o *BlockInfoType) GetBlockId() UniqueIDType`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BlockInfoType) GetBlockIdOk() (*UniqueIDType, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BlockInfoType) SetBlockId(v UniqueIDType)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BlockInfoType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetBlockName

`func (o *BlockInfoType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *BlockInfoType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *BlockInfoType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *BlockInfoType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetBlockCode

`func (o *BlockInfoType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *BlockInfoType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *BlockInfoType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *BlockInfoType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetStartDate

`func (o *BlockInfoType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *BlockInfoType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *BlockInfoType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *BlockInfoType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *BlockInfoType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *BlockInfoType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *BlockInfoType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *BlockInfoType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetCutOffDate

`func (o *BlockInfoType) GetCutOffDate() string`

GetCutOffDate returns the CutOffDate field if non-nil, zero value otherwise.

### GetCutOffDateOk

`func (o *BlockInfoType) GetCutOffDateOk() (*string, bool)`

GetCutOffDateOk returns a tuple with the CutOffDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutOffDate

`func (o *BlockInfoType) SetCutOffDate(v string)`

SetCutOffDate sets CutOffDate field to given value.

### HasCutOffDate

`func (o *BlockInfoType) HasCutOffDate() bool`

HasCutOffDate returns a boolean if a field has been set.

### GetBlockStatus

`func (o *BlockInfoType) GetBlockStatus() CodeDescriptionType`

GetBlockStatus returns the BlockStatus field if non-nil, zero value otherwise.

### GetBlockStatusOk

`func (o *BlockInfoType) GetBlockStatusOk() (*CodeDescriptionType, bool)`

GetBlockStatusOk returns a tuple with the BlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatus

`func (o *BlockInfoType) SetBlockStatus(v CodeDescriptionType)`

SetBlockStatus sets BlockStatus field to given value.

### HasBlockStatus

`func (o *BlockInfoType) HasBlockStatus() bool`

HasBlockStatus returns a boolean if a field has been set.

### GetBlockStatusColor

`func (o *BlockInfoType) GetBlockStatusColor() StatusColorType`

GetBlockStatusColor returns the BlockStatusColor field if non-nil, zero value otherwise.

### GetBlockStatusColorOk

`func (o *BlockInfoType) GetBlockStatusColorOk() (*StatusColorType, bool)`

GetBlockStatusColorOk returns a tuple with the BlockStatusColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatusColor

`func (o *BlockInfoType) SetBlockStatusColor(v StatusColorType)`

SetBlockStatusColor sets BlockStatusColor field to given value.

### HasBlockStatusColor

`func (o *BlockInfoType) HasBlockStatusColor() bool`

HasBlockStatusColor returns a boolean if a field has been set.

### GetAccountId

`func (o *BlockInfoType) GetAccountId() UniqueIDType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *BlockInfoType) GetAccountIdOk() (*UniqueIDType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *BlockInfoType) SetAccountId(v UniqueIDType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *BlockInfoType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountName

`func (o *BlockInfoType) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *BlockInfoType) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *BlockInfoType) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *BlockInfoType) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetContactId

`func (o *BlockInfoType) GetContactId() UniqueIDType`

GetContactId returns the ContactId field if non-nil, zero value otherwise.

### GetContactIdOk

`func (o *BlockInfoType) GetContactIdOk() (*UniqueIDType, bool)`

GetContactIdOk returns a tuple with the ContactId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactId

`func (o *BlockInfoType) SetContactId(v UniqueIDType)`

SetContactId sets ContactId field to given value.

### HasContactId

`func (o *BlockInfoType) HasContactId() bool`

HasContactId returns a boolean if a field has been set.

### GetContactName

`func (o *BlockInfoType) GetContactName() string`

GetContactName returns the ContactName field if non-nil, zero value otherwise.

### GetContactNameOk

`func (o *BlockInfoType) GetContactNameOk() (*string, bool)`

GetContactNameOk returns a tuple with the ContactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactName

`func (o *BlockInfoType) SetContactName(v string)`

SetContactName sets ContactName field to given value.

### HasContactName

`func (o *BlockInfoType) HasContactName() bool`

HasContactName returns a boolean if a field has been set.

### GetRoomSalesManager

`func (o *BlockInfoType) GetRoomSalesManager() CodeDescriptionType`

GetRoomSalesManager returns the RoomSalesManager field if non-nil, zero value otherwise.

### GetRoomSalesManagerOk

`func (o *BlockInfoType) GetRoomSalesManagerOk() (*CodeDescriptionType, bool)`

GetRoomSalesManagerOk returns a tuple with the RoomSalesManager field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSalesManager

`func (o *BlockInfoType) SetRoomSalesManager(v CodeDescriptionType)`

SetRoomSalesManager sets RoomSalesManager field to given value.

### HasRoomSalesManager

`func (o *BlockInfoType) HasRoomSalesManager() bool`

HasRoomSalesManager returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *BlockInfoType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *BlockInfoType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *BlockInfoType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *BlockInfoType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetAverageRoomRate

`func (o *BlockInfoType) GetAverageRoomRate() float32`

GetAverageRoomRate returns the AverageRoomRate field if non-nil, zero value otherwise.

### GetAverageRoomRateOk

`func (o *BlockInfoType) GetAverageRoomRateOk() (*float32, bool)`

GetAverageRoomRateOk returns a tuple with the AverageRoomRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageRoomRate

`func (o *BlockInfoType) SetAverageRoomRate(v float32)`

SetAverageRoomRate sets AverageRoomRate field to given value.

### HasAverageRoomRate

`func (o *BlockInfoType) HasAverageRoomRate() bool`

HasAverageRoomRate returns a boolean if a field has been set.

### GetConversionCode

`func (o *BlockInfoType) GetConversionCode() string`

GetConversionCode returns the ConversionCode field if non-nil, zero value otherwise.

### GetConversionCodeOk

`func (o *BlockInfoType) GetConversionCodeOk() (*string, bool)`

GetConversionCodeOk returns a tuple with the ConversionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCode

`func (o *BlockInfoType) SetConversionCode(v string)`

SetConversionCode sets ConversionCode field to given value.

### HasConversionCode

`func (o *BlockInfoType) HasConversionCode() bool`

HasConversionCode returns a boolean if a field has been set.

### GetRankingCode

`func (o *BlockInfoType) GetRankingCode() string`

GetRankingCode returns the RankingCode field if non-nil, zero value otherwise.

### GetRankingCodeOk

`func (o *BlockInfoType) GetRankingCodeOk() (*string, bool)`

GetRankingCodeOk returns a tuple with the RankingCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRankingCode

`func (o *BlockInfoType) SetRankingCode(v string)`

SetRankingCode sets RankingCode field to given value.

### HasRankingCode

`func (o *BlockInfoType) HasRankingCode() bool`

HasRankingCode returns a boolean if a field has been set.

### GetGuaranteeCode

`func (o *BlockInfoType) GetGuaranteeCode() string`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *BlockInfoType) GetGuaranteeCodeOk() (*string, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *BlockInfoType) SetGuaranteeCode(v string)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *BlockInfoType) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetRateProtectionDetails

`func (o *BlockInfoType) GetRateProtectionDetails() BlockRateProtectionType`

GetRateProtectionDetails returns the RateProtectionDetails field if non-nil, zero value otherwise.

### GetRateProtectionDetailsOk

`func (o *BlockInfoType) GetRateProtectionDetailsOk() (*BlockRateProtectionType, bool)`

GetRateProtectionDetailsOk returns a tuple with the RateProtectionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateProtectionDetails

`func (o *BlockInfoType) SetRateProtectionDetails(v BlockRateProtectionType)`

SetRateProtectionDetails sets RateProtectionDetails field to given value.

### HasRateProtectionDetails

`func (o *BlockInfoType) HasRateProtectionDetails() bool`

HasRateProtectionDetails returns a boolean if a field has been set.

### GetNonCompeteDetails

`func (o *BlockInfoType) GetNonCompeteDetails() BlockNonCompeteType`

GetNonCompeteDetails returns the NonCompeteDetails field if non-nil, zero value otherwise.

### GetNonCompeteDetailsOk

`func (o *BlockInfoType) GetNonCompeteDetailsOk() (*BlockNonCompeteType, bool)`

GetNonCompeteDetailsOk returns a tuple with the NonCompeteDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonCompeteDetails

`func (o *BlockInfoType) SetNonCompeteDetails(v BlockNonCompeteType)`

SetNonCompeteDetails sets NonCompeteDetails field to given value.

### HasNonCompeteDetails

`func (o *BlockInfoType) HasNonCompeteDetails() bool`

HasNonCompeteDetails returns a boolean if a field has been set.

### GetBlockClassification

`func (o *BlockInfoType) GetBlockClassification() BlockClassificationType`

GetBlockClassification returns the BlockClassification field if non-nil, zero value otherwise.

### GetBlockClassificationOk

`func (o *BlockInfoType) GetBlockClassificationOk() (*BlockClassificationType, bool)`

GetBlockClassificationOk returns a tuple with the BlockClassification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockClassification

`func (o *BlockInfoType) SetBlockClassification(v BlockClassificationType)`

SetBlockClassification sets BlockClassification field to given value.

### HasBlockClassification

`func (o *BlockInfoType) HasBlockClassification() bool`

HasBlockClassification returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


