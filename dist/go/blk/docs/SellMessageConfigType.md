# SellMessageConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** | Sell message text. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**BlockCode** | Pointer to **string** | Block Code to which the sell message is defined. | [optional] 
**Timespan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Code for which the sell message is defined. | [optional] 
**CroCode** | Pointer to **string** | CRO Code for which the sell message is defined. | [optional] 
**ChainCode** | Pointer to **string** | Chain Code for which the sell message is defined. | [optional] 
**RoomType** | Pointer to **string** | Room type for which the sell message is defined. | [optional] 
**RatePlanCode** | Pointer to **string** | Rate Plan Code for which the sell message is defined. | [optional] 
**LanguageCode** | Pointer to **string** | Language in which the sell message is defined. | [optional] 
**StickyFlag** | Pointer to **bool** | Sticky flag is used to define if the sell message should display on the block screen by default. | [optional] 
**SellSequence** | Pointer to **float32** | This number indicates the display order of the sell message. | [optional] 
**UsedInModule** | Pointer to [**[]UsedInModuleType**](UsedInModuleType.md) | This represents the moduleType where we want to display this SellMessage. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 

## Methods

### NewSellMessageConfigType

`func NewSellMessageConfigType() *SellMessageConfigType`

NewSellMessageConfigType instantiates a new SellMessageConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSellMessageConfigTypeWithDefaults

`func NewSellMessageConfigTypeWithDefaults() *SellMessageConfigType`

NewSellMessageConfigTypeWithDefaults instantiates a new SellMessageConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *SellMessageConfigType) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SellMessageConfigType) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SellMessageConfigType) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SellMessageConfigType) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetBlockId

`func (o *SellMessageConfigType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *SellMessageConfigType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *SellMessageConfigType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *SellMessageConfigType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetBlockCode

`func (o *SellMessageConfigType) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *SellMessageConfigType) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *SellMessageConfigType) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *SellMessageConfigType) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetTimespan

`func (o *SellMessageConfigType) GetTimespan() TimeSpanType`

GetTimespan returns the Timespan field if non-nil, zero value otherwise.

### GetTimespanOk

`func (o *SellMessageConfigType) GetTimespanOk() (*TimeSpanType, bool)`

GetTimespanOk returns a tuple with the Timespan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimespan

`func (o *SellMessageConfigType) SetTimespan(v TimeSpanType)`

SetTimespan sets Timespan field to given value.

### HasTimespan

`func (o *SellMessageConfigType) HasTimespan() bool`

HasTimespan returns a boolean if a field has been set.

### GetHotelId

`func (o *SellMessageConfigType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SellMessageConfigType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SellMessageConfigType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SellMessageConfigType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCroCode

`func (o *SellMessageConfigType) GetCroCode() string`

GetCroCode returns the CroCode field if non-nil, zero value otherwise.

### GetCroCodeOk

`func (o *SellMessageConfigType) GetCroCodeOk() (*string, bool)`

GetCroCodeOk returns a tuple with the CroCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCroCode

`func (o *SellMessageConfigType) SetCroCode(v string)`

SetCroCode sets CroCode field to given value.

### HasCroCode

`func (o *SellMessageConfigType) HasCroCode() bool`

HasCroCode returns a boolean if a field has been set.

### GetChainCode

`func (o *SellMessageConfigType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *SellMessageConfigType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *SellMessageConfigType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *SellMessageConfigType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetRoomType

`func (o *SellMessageConfigType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *SellMessageConfigType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *SellMessageConfigType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *SellMessageConfigType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *SellMessageConfigType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *SellMessageConfigType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *SellMessageConfigType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *SellMessageConfigType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetLanguageCode

`func (o *SellMessageConfigType) GetLanguageCode() string`

GetLanguageCode returns the LanguageCode field if non-nil, zero value otherwise.

### GetLanguageCodeOk

`func (o *SellMessageConfigType) GetLanguageCodeOk() (*string, bool)`

GetLanguageCodeOk returns a tuple with the LanguageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguageCode

`func (o *SellMessageConfigType) SetLanguageCode(v string)`

SetLanguageCode sets LanguageCode field to given value.

### HasLanguageCode

`func (o *SellMessageConfigType) HasLanguageCode() bool`

HasLanguageCode returns a boolean if a field has been set.

### GetStickyFlag

`func (o *SellMessageConfigType) GetStickyFlag() bool`

GetStickyFlag returns the StickyFlag field if non-nil, zero value otherwise.

### GetStickyFlagOk

`func (o *SellMessageConfigType) GetStickyFlagOk() (*bool, bool)`

GetStickyFlagOk returns a tuple with the StickyFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStickyFlag

`func (o *SellMessageConfigType) SetStickyFlag(v bool)`

SetStickyFlag sets StickyFlag field to given value.

### HasStickyFlag

`func (o *SellMessageConfigType) HasStickyFlag() bool`

HasStickyFlag returns a boolean if a field has been set.

### GetSellSequence

`func (o *SellMessageConfigType) GetSellSequence() float32`

GetSellSequence returns the SellSequence field if non-nil, zero value otherwise.

### GetSellSequenceOk

`func (o *SellMessageConfigType) GetSellSequenceOk() (*float32, bool)`

GetSellSequenceOk returns a tuple with the SellSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSequence

`func (o *SellMessageConfigType) SetSellSequence(v float32)`

SetSellSequence sets SellSequence field to given value.

### HasSellSequence

`func (o *SellMessageConfigType) HasSellSequence() bool`

HasSellSequence returns a boolean if a field has been set.

### GetUsedInModule

`func (o *SellMessageConfigType) GetUsedInModule() []UsedInModuleType`

GetUsedInModule returns the UsedInModule field if non-nil, zero value otherwise.

### GetUsedInModuleOk

`func (o *SellMessageConfigType) GetUsedInModuleOk() (*[]UsedInModuleType, bool)`

GetUsedInModuleOk returns a tuple with the UsedInModule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedInModule

`func (o *SellMessageConfigType) SetUsedInModule(v []UsedInModuleType)`

SetUsedInModule sets UsedInModule field to given value.

### HasUsedInModule

`func (o *SellMessageConfigType) HasUsedInModule() bool`

HasUsedInModule returns a boolean if a field has been set.

### GetType

`func (o *SellMessageConfigType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SellMessageConfigType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SellMessageConfigType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SellMessageConfigType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *SellMessageConfigType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *SellMessageConfigType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *SellMessageConfigType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *SellMessageConfigType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *SellMessageConfigType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *SellMessageConfigType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *SellMessageConfigType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *SellMessageConfigType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *SellMessageConfigType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SellMessageConfigType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SellMessageConfigType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SellMessageConfigType) HasId() bool`

HasId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


