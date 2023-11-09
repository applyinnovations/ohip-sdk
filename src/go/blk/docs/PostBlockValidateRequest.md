# PostBlockValidateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockRateCodeDetails** | Pointer to [**BlockRateCodeValidationType**](BlockRateCodeValidationType.md) |  | [optional] 
**Blocks** | Pointer to [**BlocksType**](BlocksType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostBlockValidateRequest

`func NewPostBlockValidateRequest() *PostBlockValidateRequest`

NewPostBlockValidateRequest instantiates a new PostBlockValidateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBlockValidateRequestWithDefaults

`func NewPostBlockValidateRequestWithDefaults() *PostBlockValidateRequest`

NewPostBlockValidateRequestWithDefaults instantiates a new PostBlockValidateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockRateCodeDetails

`func (o *PostBlockValidateRequest) GetBlockRateCodeDetails() BlockRateCodeValidationType`

GetBlockRateCodeDetails returns the BlockRateCodeDetails field if non-nil, zero value otherwise.

### GetBlockRateCodeDetailsOk

`func (o *PostBlockValidateRequest) GetBlockRateCodeDetailsOk() (*BlockRateCodeValidationType, bool)`

GetBlockRateCodeDetailsOk returns a tuple with the BlockRateCodeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRateCodeDetails

`func (o *PostBlockValidateRequest) SetBlockRateCodeDetails(v BlockRateCodeValidationType)`

SetBlockRateCodeDetails sets BlockRateCodeDetails field to given value.

### HasBlockRateCodeDetails

`func (o *PostBlockValidateRequest) HasBlockRateCodeDetails() bool`

HasBlockRateCodeDetails returns a boolean if a field has been set.

### GetBlocks

`func (o *PostBlockValidateRequest) GetBlocks() BlocksType`

GetBlocks returns the Blocks field if non-nil, zero value otherwise.

### GetBlocksOk

`func (o *PostBlockValidateRequest) GetBlocksOk() (*BlocksType, bool)`

GetBlocksOk returns a tuple with the Blocks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlocks

`func (o *PostBlockValidateRequest) SetBlocks(v BlocksType)`

SetBlocks sets Blocks field to given value.

### HasBlocks

`func (o *PostBlockValidateRequest) HasBlocks() bool`

HasBlocks returns a boolean if a field has been set.

### GetLinks

`func (o *PostBlockValidateRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBlockValidateRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBlockValidateRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBlockValidateRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBlockValidateRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBlockValidateRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBlockValidateRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBlockValidateRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


