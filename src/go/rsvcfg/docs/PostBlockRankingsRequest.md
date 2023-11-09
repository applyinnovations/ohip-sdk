# PostBlockRankingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockRankings** | Pointer to [**BlockRankingsType**](BlockRankingsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostBlockRankingsRequest

`func NewPostBlockRankingsRequest() *PostBlockRankingsRequest`

NewPostBlockRankingsRequest instantiates a new PostBlockRankingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBlockRankingsRequestWithDefaults

`func NewPostBlockRankingsRequestWithDefaults() *PostBlockRankingsRequest`

NewPostBlockRankingsRequestWithDefaults instantiates a new PostBlockRankingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockRankings

`func (o *PostBlockRankingsRequest) GetBlockRankings() BlockRankingsType`

GetBlockRankings returns the BlockRankings field if non-nil, zero value otherwise.

### GetBlockRankingsOk

`func (o *PostBlockRankingsRequest) GetBlockRankingsOk() (*BlockRankingsType, bool)`

GetBlockRankingsOk returns a tuple with the BlockRankings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRankings

`func (o *PostBlockRankingsRequest) SetBlockRankings(v BlockRankingsType)`

SetBlockRankings sets BlockRankings field to given value.

### HasBlockRankings

`func (o *PostBlockRankingsRequest) HasBlockRankings() bool`

HasBlockRankings returns a boolean if a field has been set.

### GetLinks

`func (o *PostBlockRankingsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBlockRankingsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBlockRankingsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBlockRankingsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBlockRankingsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBlockRankingsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBlockRankingsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBlockRankingsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


