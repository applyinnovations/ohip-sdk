# ResInventoryItemType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**Item** | Pointer to [**ItemInfoType**](ItemInfoType.md) |  | [optional] 
**Quantity** | Pointer to **int32** | Number of items booked. | [optional] 
**BlockDates** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**Source** | Pointer to [**ResInventoryItemSourceType**](ResInventoryItemSourceType.md) |  | [optional] 

## Methods

### NewResInventoryItemType

`func NewResInventoryItemType() *ResInventoryItemType`

NewResInventoryItemType instantiates a new ResInventoryItemType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResInventoryItemTypeWithDefaults

`func NewResInventoryItemTypeWithDefaults() *ResInventoryItemType`

NewResInventoryItemTypeWithDefaults instantiates a new ResInventoryItemType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUrl

`func (o *ResInventoryItemType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ResInventoryItemType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ResInventoryItemType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ResInventoryItemType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *ResInventoryItemType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ResInventoryItemType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ResInventoryItemType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ResInventoryItemType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *ResInventoryItemType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ResInventoryItemType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ResInventoryItemType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ResInventoryItemType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *ResInventoryItemType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *ResInventoryItemType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *ResInventoryItemType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *ResInventoryItemType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *ResInventoryItemType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ResInventoryItemType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ResInventoryItemType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ResInventoryItemType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *ResInventoryItemType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *ResInventoryItemType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *ResInventoryItemType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *ResInventoryItemType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetItem

`func (o *ResInventoryItemType) GetItem() ItemInfoType`

GetItem returns the Item field if non-nil, zero value otherwise.

### GetItemOk

`func (o *ResInventoryItemType) GetItemOk() (*ItemInfoType, bool)`

GetItemOk returns a tuple with the Item field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItem

`func (o *ResInventoryItemType) SetItem(v ItemInfoType)`

SetItem sets Item field to given value.

### HasItem

`func (o *ResInventoryItemType) HasItem() bool`

HasItem returns a boolean if a field has been set.

### GetQuantity

`func (o *ResInventoryItemType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ResInventoryItemType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ResInventoryItemType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *ResInventoryItemType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetBlockDates

`func (o *ResInventoryItemType) GetBlockDates() DateRangeType`

GetBlockDates returns the BlockDates field if non-nil, zero value otherwise.

### GetBlockDatesOk

`func (o *ResInventoryItemType) GetBlockDatesOk() (*DateRangeType, bool)`

GetBlockDatesOk returns a tuple with the BlockDates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockDates

`func (o *ResInventoryItemType) SetBlockDates(v DateRangeType)`

SetBlockDates sets BlockDates field to given value.

### HasBlockDates

`func (o *ResInventoryItemType) HasBlockDates() bool`

HasBlockDates returns a boolean if a field has been set.

### GetSource

`func (o *ResInventoryItemType) GetSource() ResInventoryItemSourceType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ResInventoryItemType) GetSourceOk() (*ResInventoryItemSourceType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ResInventoryItemType) SetSource(v ResInventoryItemSourceType)`

SetSource sets Source field to given value.

### HasSource

`func (o *ResInventoryItemType) HasSource() bool`

HasSource returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


