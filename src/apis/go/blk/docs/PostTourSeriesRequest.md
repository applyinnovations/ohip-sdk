# PostTourSeriesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**TourSeriesType**](TourSeriesType.md) |  | [optional] 
**ResponseInstruction** | Pointer to [**ResponseInstructionType**](ResponseInstructionType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTourSeriesRequest

`func NewPostTourSeriesRequest() *PostTourSeriesRequest`

NewPostTourSeriesRequest instantiates a new PostTourSeriesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTourSeriesRequestWithDefaults

`func NewPostTourSeriesRequestWithDefaults() *PostTourSeriesRequest`

NewPostTourSeriesRequestWithDefaults instantiates a new PostTourSeriesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *PostTourSeriesRequest) GetCriteria() TourSeriesType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PostTourSeriesRequest) GetCriteriaOk() (*TourSeriesType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PostTourSeriesRequest) SetCriteria(v TourSeriesType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PostTourSeriesRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetResponseInstruction

`func (o *PostTourSeriesRequest) GetResponseInstruction() ResponseInstructionType`

GetResponseInstruction returns the ResponseInstruction field if non-nil, zero value otherwise.

### GetResponseInstructionOk

`func (o *PostTourSeriesRequest) GetResponseInstructionOk() (*ResponseInstructionType, bool)`

GetResponseInstructionOk returns a tuple with the ResponseInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstruction

`func (o *PostTourSeriesRequest) SetResponseInstruction(v ResponseInstructionType)`

SetResponseInstruction sets ResponseInstruction field to given value.

### HasResponseInstruction

`func (o *PostTourSeriesRequest) HasResponseInstruction() bool`

HasResponseInstruction returns a boolean if a field has been set.

### GetLinks

`func (o *PostTourSeriesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTourSeriesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTourSeriesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTourSeriesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTourSeriesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTourSeriesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTourSeriesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTourSeriesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


