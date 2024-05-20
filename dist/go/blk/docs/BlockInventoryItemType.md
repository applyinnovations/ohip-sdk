# BlockInventoryItemType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**Item** | Pointer to [**ItemInfoType**](ItemInfoType.md) |  | [optional] 
**Quantity** | Pointer to **int32** | Number of items booked. | [optional] 
**Source** | Pointer to [**BlockInventoryItemSourceType**](BlockInventoryItemSourceType.md) |  | [optional] 
**TimeSpan** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 

## Methods

### NewBlockInventoryItemType

`func NewBlockInventoryItemType() *BlockInventoryItemType`

NewBlockInventoryItemType instantiates a new BlockInventoryItemType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockInventoryItemTypeWithDefaults

`func NewBlockInventoryItemTypeWithDefaults() *BlockInventoryItemType`

NewBlockInventoryItemTypeWithDefaults instantiates a new BlockInventoryItemType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BlockInventoryItemType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BlockInventoryItemType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BlockInventoryItemType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BlockInventoryItemType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdContext

`func (o *BlockInventoryItemType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *BlockInventoryItemType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *BlockInventoryItemType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *BlockInventoryItemType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetIdExtension

`func (o *BlockInventoryItemType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *BlockInventoryItemType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *BlockInventoryItemType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *BlockInventoryItemType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetInstance

`func (o *BlockInventoryItemType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *BlockInventoryItemType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *BlockInventoryItemType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *BlockInventoryItemType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetItem

`func (o *BlockInventoryItemType) GetItem() ItemInfoType`

GetItem returns the Item field if non-nil, zero value otherwise.

### GetItemOk

`func (o *BlockInventoryItemType) GetItemOk() (*ItemInfoType, bool)`

GetItemOk returns a tuple with the Item field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItem

`func (o *BlockInventoryItemType) SetItem(v ItemInfoType)`

SetItem sets Item field to given value.

### HasItem

`func (o *BlockInventoryItemType) HasItem() bool`

HasItem returns a boolean if a field has been set.

### GetQuantity

`func (o *BlockInventoryItemType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *BlockInventoryItemType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *BlockInventoryItemType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *BlockInventoryItemType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetSource

`func (o *BlockInventoryItemType) GetSource() BlockInventoryItemSourceType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *BlockInventoryItemType) GetSourceOk() (*BlockInventoryItemSourceType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *BlockInventoryItemType) SetSource(v BlockInventoryItemSourceType)`

SetSource sets Source field to given value.

### HasSource

`func (o *BlockInventoryItemType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetTimeSpan

`func (o *BlockInventoryItemType) GetTimeSpan() DateRangeType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *BlockInventoryItemType) GetTimeSpanOk() (*DateRangeType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *BlockInventoryItemType) SetTimeSpan(v DateRangeType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *BlockInventoryItemType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetType

`func (o *BlockInventoryItemType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BlockInventoryItemType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BlockInventoryItemType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *BlockInventoryItemType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUrl

`func (o *BlockInventoryItemType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *BlockInventoryItemType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *BlockInventoryItemType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *BlockInventoryItemType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


