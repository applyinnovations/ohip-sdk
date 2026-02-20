# BlockHeaderInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code to which the block belongs to. | [optional] 
**HotelName** | Pointer to **string** | Name of the hotel. | [optional] 
**BlockName** | Pointer to **string** | Block description. | [optional] 
**BlockCode** | Pointer to **string** | Unique code for the block. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**CurrencyCode** | Pointer to **string** | Default currency code of the block. | [optional] 
**RateCode** | Pointer to **string** | Primary rate code of the block. | [optional] 
**ShoulderStartDate** | Pointer to **string** | Shoulder start date of the block, applicable if the block is elastic. | [optional] 
**ShoulderEndDate** | Pointer to **string** | Shoulder end date of the block, applicable if the block is elastic. | [optional] 
**StartDate** | Pointer to **string** | Start date of the block. | [optional] 
**EndDate** | Pointer to **string** | End date of the block. | [optional] 
**InventoryControl** | Pointer to [**BlockInventoryControlType**](BlockInventoryControlType.md) |  | [optional] 
**MarketCode** | Pointer to **string** | Market code for the block. | [optional] 
**SourceOfSale** | Pointer to [**BlockSourceOfSaleType**](BlockSourceOfSaleType.md) |  | [optional] 
**GuaranteeCode** | Pointer to **string** | Guarantee Code for the block. | [optional] 
**BlockStatus** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**SuppressRate** | Pointer to **bool** | Indicates whether rates are suppressed. | [optional] 

## Methods

### NewBlockHeaderInfoType

`func NewBlockHeaderInfoType() *BlockHeaderInfoType`

NewBlockHeaderInfoType instantiates a new BlockHeaderInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockHeaderInfoTypeWithDefaults

`func NewBlockHeaderInfoTypeWithDefaults() *BlockHeaderInfoType`

NewBlockHeaderInfoTypeWithDefaults instantiates a new BlockHeaderInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BlockHeaderInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockHeaderInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockHeaderInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockHeaderInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelName

`func (o *BlockHeaderInfoType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *BlockHeaderInfoType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *BlockHeaderInfoType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *BlockHeaderInfoType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetBlockName

`func (o *BlockHeaderInfoType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *BlockHeaderInfoType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *BlockHeaderInfoType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *BlockHeaderInfoType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetBlockCode

`func (o *BlockHeaderInfoType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *BlockHeaderInfoType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *BlockHeaderInfoType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *BlockHeaderInfoType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetBlockId

`func (o *BlockHeaderInfoType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BlockHeaderInfoType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BlockHeaderInfoType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BlockHeaderInfoType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *BlockHeaderInfoType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *BlockHeaderInfoType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *BlockHeaderInfoType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *BlockHeaderInfoType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetRateCode

`func (o *BlockHeaderInfoType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *BlockHeaderInfoType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *BlockHeaderInfoType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *BlockHeaderInfoType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetShoulderStartDate

`func (o *BlockHeaderInfoType) GetShoulderStartDate() string`

GetShoulderStartDate returns the ShoulderStartDate field if non-nil, zero value otherwise.

### GetShoulderStartDateOk

`func (o *BlockHeaderInfoType) GetShoulderStartDateOk() (*string, bool)`

GetShoulderStartDateOk returns a tuple with the ShoulderStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShoulderStartDate

`func (o *BlockHeaderInfoType) SetShoulderStartDate(v string)`

SetShoulderStartDate sets ShoulderStartDate field to given value.

### HasShoulderStartDate

`func (o *BlockHeaderInfoType) HasShoulderStartDate() bool`

HasShoulderStartDate returns a boolean if a field has been set.

### GetShoulderEndDate

`func (o *BlockHeaderInfoType) GetShoulderEndDate() string`

GetShoulderEndDate returns the ShoulderEndDate field if non-nil, zero value otherwise.

### GetShoulderEndDateOk

`func (o *BlockHeaderInfoType) GetShoulderEndDateOk() (*string, bool)`

GetShoulderEndDateOk returns a tuple with the ShoulderEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShoulderEndDate

`func (o *BlockHeaderInfoType) SetShoulderEndDate(v string)`

SetShoulderEndDate sets ShoulderEndDate field to given value.

### HasShoulderEndDate

`func (o *BlockHeaderInfoType) HasShoulderEndDate() bool`

HasShoulderEndDate returns a boolean if a field has been set.

### GetStartDate

`func (o *BlockHeaderInfoType) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *BlockHeaderInfoType) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *BlockHeaderInfoType) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *BlockHeaderInfoType) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *BlockHeaderInfoType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *BlockHeaderInfoType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *BlockHeaderInfoType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *BlockHeaderInfoType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetInventoryControl

`func (o *BlockHeaderInfoType) GetInventoryControl() BlockInventoryControlType`

GetInventoryControl returns the InventoryControl field if non-nil, zero value otherwise.

### GetInventoryControlOk

`func (o *BlockHeaderInfoType) GetInventoryControlOk() (*BlockInventoryControlType, bool)`

GetInventoryControlOk returns a tuple with the InventoryControl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryControl

`func (o *BlockHeaderInfoType) SetInventoryControl(v BlockInventoryControlType)`

SetInventoryControl sets InventoryControl field to given value.

### HasInventoryControl

`func (o *BlockHeaderInfoType) HasInventoryControl() bool`

HasInventoryControl returns a boolean if a field has been set.

### GetMarketCode

`func (o *BlockHeaderInfoType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *BlockHeaderInfoType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *BlockHeaderInfoType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *BlockHeaderInfoType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetSourceOfSale

`func (o *BlockHeaderInfoType) GetSourceOfSale() BlockSourceOfSaleType`

GetSourceOfSale returns the SourceOfSale field if non-nil, zero value otherwise.

### GetSourceOfSaleOk

`func (o *BlockHeaderInfoType) GetSourceOfSaleOk() (*BlockSourceOfSaleType, bool)`

GetSourceOfSaleOk returns a tuple with the SourceOfSale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceOfSale

`func (o *BlockHeaderInfoType) SetSourceOfSale(v BlockSourceOfSaleType)`

SetSourceOfSale sets SourceOfSale field to given value.

### HasSourceOfSale

`func (o *BlockHeaderInfoType) HasSourceOfSale() bool`

HasSourceOfSale returns a boolean if a field has been set.

### GetGuaranteeCode

`func (o *BlockHeaderInfoType) GetGuaranteeCode() string`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *BlockHeaderInfoType) GetGuaranteeCodeOk() (*string, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *BlockHeaderInfoType) SetGuaranteeCode(v string)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *BlockHeaderInfoType) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetBlockStatus

`func (o *BlockHeaderInfoType) GetBlockStatus() CodeDescriptionType`

GetBlockStatus returns the BlockStatus field if non-nil, zero value otherwise.

### GetBlockStatusOk

`func (o *BlockHeaderInfoType) GetBlockStatusOk() (*CodeDescriptionType, bool)`

GetBlockStatusOk returns a tuple with the BlockStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatus

`func (o *BlockHeaderInfoType) SetBlockStatus(v CodeDescriptionType)`

SetBlockStatus sets BlockStatus field to given value.

### HasBlockStatus

`func (o *BlockHeaderInfoType) HasBlockStatus() bool`

HasBlockStatus returns a boolean if a field has been set.

### GetSuppressRate

`func (o *BlockHeaderInfoType) GetSuppressRate() bool`

GetSuppressRate returns the SuppressRate field if non-nil, zero value otherwise.

### GetSuppressRateOk

`func (o *BlockHeaderInfoType) GetSuppressRateOk() (*bool, bool)`

GetSuppressRateOk returns a tuple with the SuppressRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuppressRate

`func (o *BlockHeaderInfoType) SetSuppressRate(v bool)`

SetSuppressRate sets SuppressRate field to given value.

### HasSuppressRate

`func (o *BlockHeaderInfoType) HasSuppressRate() bool`

HasSuppressRate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


