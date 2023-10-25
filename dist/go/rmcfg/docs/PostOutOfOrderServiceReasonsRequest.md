# PostOutOfOrderServiceReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**OutOfOrderServiceReasons** | Pointer to [**[]OutOfOrderServiceReasonType**](OutOfOrderServiceReasonType.md) | out of order/service reason details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostOutOfOrderServiceReasonsRequest

`func NewPostOutOfOrderServiceReasonsRequest() *PostOutOfOrderServiceReasonsRequest`

NewPostOutOfOrderServiceReasonsRequest instantiates a new PostOutOfOrderServiceReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostOutOfOrderServiceReasonsRequestWithDefaults

`func NewPostOutOfOrderServiceReasonsRequestWithDefaults() *PostOutOfOrderServiceReasonsRequest`

NewPostOutOfOrderServiceReasonsRequestWithDefaults instantiates a new PostOutOfOrderServiceReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostOutOfOrderServiceReasonsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostOutOfOrderServiceReasonsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostOutOfOrderServiceReasonsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostOutOfOrderServiceReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOutOfOrderServiceReasons

`func (o *PostOutOfOrderServiceReasonsRequest) GetOutOfOrderServiceReasons() []OutOfOrderServiceReasonType`

GetOutOfOrderServiceReasons returns the OutOfOrderServiceReasons field if non-nil, zero value otherwise.

### GetOutOfOrderServiceReasonsOk

`func (o *PostOutOfOrderServiceReasonsRequest) GetOutOfOrderServiceReasonsOk() (*[]OutOfOrderServiceReasonType, bool)`

GetOutOfOrderServiceReasonsOk returns a tuple with the OutOfOrderServiceReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutOfOrderServiceReasons

`func (o *PostOutOfOrderServiceReasonsRequest) SetOutOfOrderServiceReasons(v []OutOfOrderServiceReasonType)`

SetOutOfOrderServiceReasons sets OutOfOrderServiceReasons field to given value.

### HasOutOfOrderServiceReasons

`func (o *PostOutOfOrderServiceReasonsRequest) HasOutOfOrderServiceReasons() bool`

HasOutOfOrderServiceReasons returns a boolean if a field has been set.

### GetWarnings

`func (o *PostOutOfOrderServiceReasonsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostOutOfOrderServiceReasonsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostOutOfOrderServiceReasonsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostOutOfOrderServiceReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


