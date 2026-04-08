# BusinessSegmentsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessSegments** | Pointer to [**[]BusinessSegmentType**](BusinessSegmentType.md) | List of Business Segments. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBusinessSegmentsToBeChanged

`func NewBusinessSegmentsToBeChanged() *BusinessSegmentsToBeChanged`

NewBusinessSegmentsToBeChanged instantiates a new BusinessSegmentsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessSegmentsToBeChangedWithDefaults

`func NewBusinessSegmentsToBeChangedWithDefaults() *BusinessSegmentsToBeChanged`

NewBusinessSegmentsToBeChangedWithDefaults instantiates a new BusinessSegmentsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessSegments

`func (o *BusinessSegmentsToBeChanged) GetBusinessSegments() []BusinessSegmentType`

GetBusinessSegments returns the BusinessSegments field if non-nil, zero value otherwise.

### GetBusinessSegmentsOk

`func (o *BusinessSegmentsToBeChanged) GetBusinessSegmentsOk() (*[]BusinessSegmentType, bool)`

GetBusinessSegmentsOk returns a tuple with the BusinessSegments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessSegments

`func (o *BusinessSegmentsToBeChanged) SetBusinessSegments(v []BusinessSegmentType)`

SetBusinessSegments sets BusinessSegments field to given value.

### HasBusinessSegments

`func (o *BusinessSegmentsToBeChanged) HasBusinessSegments() bool`

HasBusinessSegments returns a boolean if a field has been set.

### GetLinks

`func (o *BusinessSegmentsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BusinessSegmentsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BusinessSegmentsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BusinessSegmentsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BusinessSegmentsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BusinessSegmentsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BusinessSegmentsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BusinessSegmentsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


