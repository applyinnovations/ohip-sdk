# PostBlockStatusCodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockStatusCode** | Pointer to [**BlockStatusCodeType**](BlockStatusCodeType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostBlockStatusCodeRequest

`func NewPostBlockStatusCodeRequest() *PostBlockStatusCodeRequest`

NewPostBlockStatusCodeRequest instantiates a new PostBlockStatusCodeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBlockStatusCodeRequestWithDefaults

`func NewPostBlockStatusCodeRequestWithDefaults() *PostBlockStatusCodeRequest`

NewPostBlockStatusCodeRequestWithDefaults instantiates a new PostBlockStatusCodeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockStatusCode

`func (o *PostBlockStatusCodeRequest) GetBlockStatusCode() BlockStatusCodeType`

GetBlockStatusCode returns the BlockStatusCode field if non-nil, zero value otherwise.

### GetBlockStatusCodeOk

`func (o *PostBlockStatusCodeRequest) GetBlockStatusCodeOk() (*BlockStatusCodeType, bool)`

GetBlockStatusCodeOk returns a tuple with the BlockStatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockStatusCode

`func (o *PostBlockStatusCodeRequest) SetBlockStatusCode(v BlockStatusCodeType)`

SetBlockStatusCode sets BlockStatusCode field to given value.

### HasBlockStatusCode

`func (o *PostBlockStatusCodeRequest) HasBlockStatusCode() bool`

HasBlockStatusCode returns a boolean if a field has been set.

### GetLinks

`func (o *PostBlockStatusCodeRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBlockStatusCodeRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBlockStatusCodeRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBlockStatusCodeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBlockStatusCodeRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBlockStatusCodeRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBlockStatusCodeRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBlockStatusCodeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


