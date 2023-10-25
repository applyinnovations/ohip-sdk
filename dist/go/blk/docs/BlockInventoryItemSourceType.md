# BlockInventoryItemSourceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**PackageCode** | Pointer to **string** | Package Code, If populated specifies that the item is setup due to a Package. | [optional] 
**RatePlanCode** | Pointer to **string** | Rate Plan Code, If populated specifies that the item is setup due to a Rate Plan. | [optional] 

## Methods

### NewBlockInventoryItemSourceType

`func NewBlockInventoryItemSourceType() *BlockInventoryItemSourceType`

NewBlockInventoryItemSourceType instantiates a new BlockInventoryItemSourceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockInventoryItemSourceTypeWithDefaults

`func NewBlockInventoryItemSourceTypeWithDefaults() *BlockInventoryItemSourceType`

NewBlockInventoryItemSourceTypeWithDefaults instantiates a new BlockInventoryItemSourceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *BlockInventoryItemSourceType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BlockInventoryItemSourceType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BlockInventoryItemSourceType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BlockInventoryItemSourceType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetPackageCode

`func (o *BlockInventoryItemSourceType) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *BlockInventoryItemSourceType) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *BlockInventoryItemSourceType) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *BlockInventoryItemSourceType) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *BlockInventoryItemSourceType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *BlockInventoryItemSourceType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *BlockInventoryItemSourceType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *BlockInventoryItemSourceType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


