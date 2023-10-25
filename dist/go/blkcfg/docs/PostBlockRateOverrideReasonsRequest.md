# PostBlockRateOverrideReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockRateOverrideReasons** | Pointer to [**[]BlockRateOverrideReasonType**](BlockRateOverrideReasonType.md) | List of Block Rate Override Reasons. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostBlockRateOverrideReasonsRequest

`func NewPostBlockRateOverrideReasonsRequest() *PostBlockRateOverrideReasonsRequest`

NewPostBlockRateOverrideReasonsRequest instantiates a new PostBlockRateOverrideReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBlockRateOverrideReasonsRequestWithDefaults

`func NewPostBlockRateOverrideReasonsRequestWithDefaults() *PostBlockRateOverrideReasonsRequest`

NewPostBlockRateOverrideReasonsRequestWithDefaults instantiates a new PostBlockRateOverrideReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockRateOverrideReasons

`func (o *PostBlockRateOverrideReasonsRequest) GetBlockRateOverrideReasons() []BlockRateOverrideReasonType`

GetBlockRateOverrideReasons returns the BlockRateOverrideReasons field if non-nil, zero value otherwise.

### GetBlockRateOverrideReasonsOk

`func (o *PostBlockRateOverrideReasonsRequest) GetBlockRateOverrideReasonsOk() (*[]BlockRateOverrideReasonType, bool)`

GetBlockRateOverrideReasonsOk returns a tuple with the BlockRateOverrideReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRateOverrideReasons

`func (o *PostBlockRateOverrideReasonsRequest) SetBlockRateOverrideReasons(v []BlockRateOverrideReasonType)`

SetBlockRateOverrideReasons sets BlockRateOverrideReasons field to given value.

### HasBlockRateOverrideReasons

`func (o *PostBlockRateOverrideReasonsRequest) HasBlockRateOverrideReasons() bool`

HasBlockRateOverrideReasons returns a boolean if a field has been set.

### GetLinks

`func (o *PostBlockRateOverrideReasonsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBlockRateOverrideReasonsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBlockRateOverrideReasonsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBlockRateOverrideReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBlockRateOverrideReasonsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBlockRateOverrideReasonsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBlockRateOverrideReasonsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBlockRateOverrideReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


