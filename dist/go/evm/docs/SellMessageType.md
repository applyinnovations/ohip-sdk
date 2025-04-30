# SellMessageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** | This is the message text. | [optional] 
**CroCode** | Pointer to **string** | This is the Central Reservation office code. | [optional] 
**ChainCode** | Pointer to **string** | This is the chain code. | [optional] 
**HotelId** | Pointer to **string** | This is the hotel code or resort. | [optional] 
**RoomType** | Pointer to **string** | This represents the functionSpaceDetails type code. | [optional] 
**RatePlanCode** | Pointer to **string** | This represents the rate plan code of the functionSpaceDetails type. | [optional] 
**LanguageCode** | Pointer to **string** | This is the language code. | [optional] 
**StickyFlagYn** | Pointer to **string** | Flag which tells if this message is Sticky (Y/N). | [optional] 
**UsedInModule** | Pointer to [**UsedInModuleType**](UsedInModuleType.md) |  | [optional] 
**BeginDate** | Pointer to **string** | This is the Begin date for the configured SellMessage. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 

## Methods

### NewSellMessageType

`func NewSellMessageType() *SellMessageType`

NewSellMessageType instantiates a new SellMessageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSellMessageTypeWithDefaults

`func NewSellMessageTypeWithDefaults() *SellMessageType`

NewSellMessageTypeWithDefaults instantiates a new SellMessageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *SellMessageType) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SellMessageType) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SellMessageType) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SellMessageType) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetCroCode

`func (o *SellMessageType) GetCroCode() string`

GetCroCode returns the CroCode field if non-nil, zero value otherwise.

### GetCroCodeOk

`func (o *SellMessageType) GetCroCodeOk() (*string, bool)`

GetCroCodeOk returns a tuple with the CroCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCroCode

`func (o *SellMessageType) SetCroCode(v string)`

SetCroCode sets CroCode field to given value.

### HasCroCode

`func (o *SellMessageType) HasCroCode() bool`

HasCroCode returns a boolean if a field has been set.

### GetChainCode

`func (o *SellMessageType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *SellMessageType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *SellMessageType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *SellMessageType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetHotelId

`func (o *SellMessageType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SellMessageType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SellMessageType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SellMessageType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomType

`func (o *SellMessageType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *SellMessageType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *SellMessageType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *SellMessageType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *SellMessageType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *SellMessageType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *SellMessageType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *SellMessageType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetLanguageCode

`func (o *SellMessageType) GetLanguageCode() string`

GetLanguageCode returns the LanguageCode field if non-nil, zero value otherwise.

### GetLanguageCodeOk

`func (o *SellMessageType) GetLanguageCodeOk() (*string, bool)`

GetLanguageCodeOk returns a tuple with the LanguageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguageCode

`func (o *SellMessageType) SetLanguageCode(v string)`

SetLanguageCode sets LanguageCode field to given value.

### HasLanguageCode

`func (o *SellMessageType) HasLanguageCode() bool`

HasLanguageCode returns a boolean if a field has been set.

### GetStickyFlagYn

`func (o *SellMessageType) GetStickyFlagYn() string`

GetStickyFlagYn returns the StickyFlagYn field if non-nil, zero value otherwise.

### GetStickyFlagYnOk

`func (o *SellMessageType) GetStickyFlagYnOk() (*string, bool)`

GetStickyFlagYnOk returns a tuple with the StickyFlagYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStickyFlagYn

`func (o *SellMessageType) SetStickyFlagYn(v string)`

SetStickyFlagYn sets StickyFlagYn field to given value.

### HasStickyFlagYn

`func (o *SellMessageType) HasStickyFlagYn() bool`

HasStickyFlagYn returns a boolean if a field has been set.

### GetUsedInModule

`func (o *SellMessageType) GetUsedInModule() UsedInModuleType`

GetUsedInModule returns the UsedInModule field if non-nil, zero value otherwise.

### GetUsedInModuleOk

`func (o *SellMessageType) GetUsedInModuleOk() (*UsedInModuleType, bool)`

GetUsedInModuleOk returns a tuple with the UsedInModule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedInModule

`func (o *SellMessageType) SetUsedInModule(v UsedInModuleType)`

SetUsedInModule sets UsedInModule field to given value.

### HasUsedInModule

`func (o *SellMessageType) HasUsedInModule() bool`

HasUsedInModule returns a boolean if a field has been set.

### GetBeginDate

`func (o *SellMessageType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *SellMessageType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *SellMessageType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *SellMessageType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetType

`func (o *SellMessageType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SellMessageType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SellMessageType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SellMessageType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *SellMessageType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *SellMessageType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *SellMessageType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *SellMessageType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *SellMessageType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *SellMessageType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *SellMessageType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *SellMessageType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *SellMessageType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SellMessageType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SellMessageType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SellMessageType) HasId() bool`

HasId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


