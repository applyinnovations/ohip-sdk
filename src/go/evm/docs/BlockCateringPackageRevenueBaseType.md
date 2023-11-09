# BlockCateringPackageRevenueBaseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockInfo** | Pointer to [**BlockType**](BlockType.md) |  | [optional] 
**FlatPrice** | Pointer to **bool** | Defines if Flat Rate is applicable for the package. | [optional] 
**PackageDetail** | Pointer to [**CateringPackageInfoType**](CateringPackageInfoType.md) |  | [optional] 
**PackageId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PriceCode** | Pointer to **string** | Price Code of the associated package. | [optional] 
**PriceDescription** | Pointer to **string** | Price Code description of the associated package. | [optional] 
**Revenues** | Pointer to [**RevenueListType**](RevenueListType.md) |  | [optional] 

## Methods

### NewBlockCateringPackageRevenueBaseType

`func NewBlockCateringPackageRevenueBaseType() *BlockCateringPackageRevenueBaseType`

NewBlockCateringPackageRevenueBaseType instantiates a new BlockCateringPackageRevenueBaseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockCateringPackageRevenueBaseTypeWithDefaults

`func NewBlockCateringPackageRevenueBaseTypeWithDefaults() *BlockCateringPackageRevenueBaseType`

NewBlockCateringPackageRevenueBaseTypeWithDefaults instantiates a new BlockCateringPackageRevenueBaseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockInfo

`func (o *BlockCateringPackageRevenueBaseType) GetBlockInfo() BlockType`

GetBlockInfo returns the BlockInfo field if non-nil, zero value otherwise.

### GetBlockInfoOk

`func (o *BlockCateringPackageRevenueBaseType) GetBlockInfoOk() (*BlockType, bool)`

GetBlockInfoOk returns a tuple with the BlockInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockInfo

`func (o *BlockCateringPackageRevenueBaseType) SetBlockInfo(v BlockType)`

SetBlockInfo sets BlockInfo field to given value.

### HasBlockInfo

`func (o *BlockCateringPackageRevenueBaseType) HasBlockInfo() bool`

HasBlockInfo returns a boolean if a field has been set.

### GetFlatPrice

`func (o *BlockCateringPackageRevenueBaseType) GetFlatPrice() bool`

GetFlatPrice returns the FlatPrice field if non-nil, zero value otherwise.

### GetFlatPriceOk

`func (o *BlockCateringPackageRevenueBaseType) GetFlatPriceOk() (*bool, bool)`

GetFlatPriceOk returns a tuple with the FlatPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlatPrice

`func (o *BlockCateringPackageRevenueBaseType) SetFlatPrice(v bool)`

SetFlatPrice sets FlatPrice field to given value.

### HasFlatPrice

`func (o *BlockCateringPackageRevenueBaseType) HasFlatPrice() bool`

HasFlatPrice returns a boolean if a field has been set.

### GetPackageDetail

`func (o *BlockCateringPackageRevenueBaseType) GetPackageDetail() CateringPackageInfoType`

GetPackageDetail returns the PackageDetail field if non-nil, zero value otherwise.

### GetPackageDetailOk

`func (o *BlockCateringPackageRevenueBaseType) GetPackageDetailOk() (*CateringPackageInfoType, bool)`

GetPackageDetailOk returns a tuple with the PackageDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageDetail

`func (o *BlockCateringPackageRevenueBaseType) SetPackageDetail(v CateringPackageInfoType)`

SetPackageDetail sets PackageDetail field to given value.

### HasPackageDetail

`func (o *BlockCateringPackageRevenueBaseType) HasPackageDetail() bool`

HasPackageDetail returns a boolean if a field has been set.

### GetPackageId

`func (o *BlockCateringPackageRevenueBaseType) GetPackageId() UniqueIDType`

GetPackageId returns the PackageId field if non-nil, zero value otherwise.

### GetPackageIdOk

`func (o *BlockCateringPackageRevenueBaseType) GetPackageIdOk() (*UniqueIDType, bool)`

GetPackageIdOk returns a tuple with the PackageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageId

`func (o *BlockCateringPackageRevenueBaseType) SetPackageId(v UniqueIDType)`

SetPackageId sets PackageId field to given value.

### HasPackageId

`func (o *BlockCateringPackageRevenueBaseType) HasPackageId() bool`

HasPackageId returns a boolean if a field has been set.

### GetPriceCode

`func (o *BlockCateringPackageRevenueBaseType) GetPriceCode() string`

GetPriceCode returns the PriceCode field if non-nil, zero value otherwise.

### GetPriceCodeOk

`func (o *BlockCateringPackageRevenueBaseType) GetPriceCodeOk() (*string, bool)`

GetPriceCodeOk returns a tuple with the PriceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceCode

`func (o *BlockCateringPackageRevenueBaseType) SetPriceCode(v string)`

SetPriceCode sets PriceCode field to given value.

### HasPriceCode

`func (o *BlockCateringPackageRevenueBaseType) HasPriceCode() bool`

HasPriceCode returns a boolean if a field has been set.

### GetPriceDescription

`func (o *BlockCateringPackageRevenueBaseType) GetPriceDescription() string`

GetPriceDescription returns the PriceDescription field if non-nil, zero value otherwise.

### GetPriceDescriptionOk

`func (o *BlockCateringPackageRevenueBaseType) GetPriceDescriptionOk() (*string, bool)`

GetPriceDescriptionOk returns a tuple with the PriceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceDescription

`func (o *BlockCateringPackageRevenueBaseType) SetPriceDescription(v string)`

SetPriceDescription sets PriceDescription field to given value.

### HasPriceDescription

`func (o *BlockCateringPackageRevenueBaseType) HasPriceDescription() bool`

HasPriceDescription returns a boolean if a field has been set.

### GetRevenues

`func (o *BlockCateringPackageRevenueBaseType) GetRevenues() RevenueListType`

GetRevenues returns the Revenues field if non-nil, zero value otherwise.

### GetRevenuesOk

`func (o *BlockCateringPackageRevenueBaseType) GetRevenuesOk() (*RevenueListType, bool)`

GetRevenuesOk returns a tuple with the Revenues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenues

`func (o *BlockCateringPackageRevenueBaseType) SetRevenues(v RevenueListType)`

SetRevenues sets Revenues field to given value.

### HasRevenues

`func (o *BlockCateringPackageRevenueBaseType) HasRevenues() bool`

HasRevenues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


