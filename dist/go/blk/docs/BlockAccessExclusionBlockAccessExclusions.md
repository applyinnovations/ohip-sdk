# BlockAccessExclusionBlockAccessExclusions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAccessExclusion** | Pointer to [**[]BlockAccessExclusionType**](BlockAccessExclusionType.md) |  | [optional] 
**AccessExclusionMessage** | Pointer to [**BlockAccessExclusionMessageType**](BlockAccessExclusionMessageType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code to which the block belongs to. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**Overlay** | Pointer to **bool** | Indicates whether to overlay the list of existing access exclusions with the new list. | [optional] 

## Methods

### NewBlockAccessExclusionBlockAccessExclusions

`func NewBlockAccessExclusionBlockAccessExclusions() *BlockAccessExclusionBlockAccessExclusions`

NewBlockAccessExclusionBlockAccessExclusions instantiates a new BlockAccessExclusionBlockAccessExclusions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAccessExclusionBlockAccessExclusionsWithDefaults

`func NewBlockAccessExclusionBlockAccessExclusionsWithDefaults() *BlockAccessExclusionBlockAccessExclusions`

NewBlockAccessExclusionBlockAccessExclusionsWithDefaults instantiates a new BlockAccessExclusionBlockAccessExclusions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAccessExclusion

`func (o *BlockAccessExclusionBlockAccessExclusions) GetBlockAccessExclusion() []BlockAccessExclusionType`

GetBlockAccessExclusion returns the BlockAccessExclusion field if non-nil, zero value otherwise.

### GetBlockAccessExclusionOk

`func (o *BlockAccessExclusionBlockAccessExclusions) GetBlockAccessExclusionOk() (*[]BlockAccessExclusionType, bool)`

GetBlockAccessExclusionOk returns a tuple with the BlockAccessExclusion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAccessExclusion

`func (o *BlockAccessExclusionBlockAccessExclusions) SetBlockAccessExclusion(v []BlockAccessExclusionType)`

SetBlockAccessExclusion sets BlockAccessExclusion field to given value.

### HasBlockAccessExclusion

`func (o *BlockAccessExclusionBlockAccessExclusions) HasBlockAccessExclusion() bool`

HasBlockAccessExclusion returns a boolean if a field has been set.

### GetAccessExclusionMessage

`func (o *BlockAccessExclusionBlockAccessExclusions) GetAccessExclusionMessage() BlockAccessExclusionMessageType`

GetAccessExclusionMessage returns the AccessExclusionMessage field if non-nil, zero value otherwise.

### GetAccessExclusionMessageOk

`func (o *BlockAccessExclusionBlockAccessExclusions) GetAccessExclusionMessageOk() (*BlockAccessExclusionMessageType, bool)`

GetAccessExclusionMessageOk returns a tuple with the AccessExclusionMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessExclusionMessage

`func (o *BlockAccessExclusionBlockAccessExclusions) SetAccessExclusionMessage(v BlockAccessExclusionMessageType)`

SetAccessExclusionMessage sets AccessExclusionMessage field to given value.

### HasAccessExclusionMessage

`func (o *BlockAccessExclusionBlockAccessExclusions) HasAccessExclusionMessage() bool`

HasAccessExclusionMessage returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockAccessExclusionBlockAccessExclusions) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockAccessExclusionBlockAccessExclusions) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockAccessExclusionBlockAccessExclusions) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockAccessExclusionBlockAccessExclusions) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetUrl

`func (o *BlockAccessExclusionBlockAccessExclusions) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *BlockAccessExclusionBlockAccessExclusions) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *BlockAccessExclusionBlockAccessExclusions) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *BlockAccessExclusionBlockAccessExclusions) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *BlockAccessExclusionBlockAccessExclusions) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BlockAccessExclusionBlockAccessExclusions) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BlockAccessExclusionBlockAccessExclusions) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *BlockAccessExclusionBlockAccessExclusions) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *BlockAccessExclusionBlockAccessExclusions) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *BlockAccessExclusionBlockAccessExclusions) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *BlockAccessExclusionBlockAccessExclusions) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *BlockAccessExclusionBlockAccessExclusions) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *BlockAccessExclusionBlockAccessExclusions) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *BlockAccessExclusionBlockAccessExclusions) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *BlockAccessExclusionBlockAccessExclusions) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *BlockAccessExclusionBlockAccessExclusions) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *BlockAccessExclusionBlockAccessExclusions) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BlockAccessExclusionBlockAccessExclusions) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BlockAccessExclusionBlockAccessExclusions) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BlockAccessExclusionBlockAccessExclusions) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *BlockAccessExclusionBlockAccessExclusions) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *BlockAccessExclusionBlockAccessExclusions) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *BlockAccessExclusionBlockAccessExclusions) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *BlockAccessExclusionBlockAccessExclusions) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetOverlay

`func (o *BlockAccessExclusionBlockAccessExclusions) GetOverlay() bool`

GetOverlay returns the Overlay field if non-nil, zero value otherwise.

### GetOverlayOk

`func (o *BlockAccessExclusionBlockAccessExclusions) GetOverlayOk() (*bool, bool)`

GetOverlayOk returns a tuple with the Overlay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverlay

`func (o *BlockAccessExclusionBlockAccessExclusions) SetOverlay(v bool)`

SetOverlay sets Overlay field to given value.

### HasOverlay

`func (o *BlockAccessExclusionBlockAccessExclusions) HasOverlay() bool`

HasOverlay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


