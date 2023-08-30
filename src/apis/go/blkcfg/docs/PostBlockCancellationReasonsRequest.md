# PostBlockCancellationReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockCancellationReasons** | Pointer to [**[]BlockCancellationReasonType**](BlockCancellationReasonType.md) | List of Block Cancellation Reasons. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostBlockCancellationReasonsRequest

`func NewPostBlockCancellationReasonsRequest() *PostBlockCancellationReasonsRequest`

NewPostBlockCancellationReasonsRequest instantiates a new PostBlockCancellationReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBlockCancellationReasonsRequestWithDefaults

`func NewPostBlockCancellationReasonsRequestWithDefaults() *PostBlockCancellationReasonsRequest`

NewPostBlockCancellationReasonsRequestWithDefaults instantiates a new PostBlockCancellationReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockCancellationReasons

`func (o *PostBlockCancellationReasonsRequest) GetBlockCancellationReasons() []BlockCancellationReasonType`

GetBlockCancellationReasons returns the BlockCancellationReasons field if non-nil, zero value otherwise.

### GetBlockCancellationReasonsOk

`func (o *PostBlockCancellationReasonsRequest) GetBlockCancellationReasonsOk() (*[]BlockCancellationReasonType, bool)`

GetBlockCancellationReasonsOk returns a tuple with the BlockCancellationReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCancellationReasons

`func (o *PostBlockCancellationReasonsRequest) SetBlockCancellationReasons(v []BlockCancellationReasonType)`

SetBlockCancellationReasons sets BlockCancellationReasons field to given value.

### HasBlockCancellationReasons

`func (o *PostBlockCancellationReasonsRequest) HasBlockCancellationReasons() bool`

HasBlockCancellationReasons returns a boolean if a field has been set.

### GetLinks

`func (o *PostBlockCancellationReasonsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBlockCancellationReasonsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBlockCancellationReasonsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBlockCancellationReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBlockCancellationReasonsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBlockCancellationReasonsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBlockCancellationReasonsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBlockCancellationReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


