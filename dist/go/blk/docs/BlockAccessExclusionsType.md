# BlockAccessExclusionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAccessExclusion** | Pointer to [**[]BlockAccessExclusionType**](BlockAccessExclusionType.md) |  | [optional] 
**AccessExclusionMessage** | Pointer to [**BlockAccessExclusionMessageType**](BlockAccessExclusionMessageType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code to which the block belongs to. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 

## Methods

### NewBlockAccessExclusionsType

`func NewBlockAccessExclusionsType() *BlockAccessExclusionsType`

NewBlockAccessExclusionsType instantiates a new BlockAccessExclusionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAccessExclusionsTypeWithDefaults

`func NewBlockAccessExclusionsTypeWithDefaults() *BlockAccessExclusionsType`

NewBlockAccessExclusionsTypeWithDefaults instantiates a new BlockAccessExclusionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAccessExclusion

`func (o *BlockAccessExclusionsType) GetBlockAccessExclusion() []BlockAccessExclusionType`

GetBlockAccessExclusion returns the BlockAccessExclusion field if non-nil, zero value otherwise.

### GetBlockAccessExclusionOk

`func (o *BlockAccessExclusionsType) GetBlockAccessExclusionOk() (*[]BlockAccessExclusionType, bool)`

GetBlockAccessExclusionOk returns a tuple with the BlockAccessExclusion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAccessExclusion

`func (o *BlockAccessExclusionsType) SetBlockAccessExclusion(v []BlockAccessExclusionType)`

SetBlockAccessExclusion sets BlockAccessExclusion field to given value.

### HasBlockAccessExclusion

`func (o *BlockAccessExclusionsType) HasBlockAccessExclusion() bool`

HasBlockAccessExclusion returns a boolean if a field has been set.

### GetAccessExclusionMessage

`func (o *BlockAccessExclusionsType) GetAccessExclusionMessage() BlockAccessExclusionMessageType`

GetAccessExclusionMessage returns the AccessExclusionMessage field if non-nil, zero value otherwise.

### GetAccessExclusionMessageOk

`func (o *BlockAccessExclusionsType) GetAccessExclusionMessageOk() (*BlockAccessExclusionMessageType, bool)`

GetAccessExclusionMessageOk returns a tuple with the AccessExclusionMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessExclusionMessage

`func (o *BlockAccessExclusionsType) SetAccessExclusionMessage(v BlockAccessExclusionMessageType)`

SetAccessExclusionMessage sets AccessExclusionMessage field to given value.

### HasAccessExclusionMessage

`func (o *BlockAccessExclusionsType) HasAccessExclusionMessage() bool`

HasAccessExclusionMessage returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockAccessExclusionsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockAccessExclusionsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockAccessExclusionsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockAccessExclusionsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetType

`func (o *BlockAccessExclusionsType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BlockAccessExclusionsType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BlockAccessExclusionsType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *BlockAccessExclusionsType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *BlockAccessExclusionsType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *BlockAccessExclusionsType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *BlockAccessExclusionsType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *BlockAccessExclusionsType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *BlockAccessExclusionsType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *BlockAccessExclusionsType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *BlockAccessExclusionsType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *BlockAccessExclusionsType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *BlockAccessExclusionsType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BlockAccessExclusionsType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BlockAccessExclusionsType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BlockAccessExclusionsType) HasId() bool`

HasId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


