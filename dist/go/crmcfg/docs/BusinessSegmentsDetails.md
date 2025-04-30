# BusinessSegmentsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessSegments** | Pointer to [**[]BusinessSegmentType**](BusinessSegmentType.md) | List of Business Segments. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBusinessSegmentsDetails

`func NewBusinessSegmentsDetails() *BusinessSegmentsDetails`

NewBusinessSegmentsDetails instantiates a new BusinessSegmentsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessSegmentsDetailsWithDefaults

`func NewBusinessSegmentsDetailsWithDefaults() *BusinessSegmentsDetails`

NewBusinessSegmentsDetailsWithDefaults instantiates a new BusinessSegmentsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessSegments

`func (o *BusinessSegmentsDetails) GetBusinessSegments() []BusinessSegmentType`

GetBusinessSegments returns the BusinessSegments field if non-nil, zero value otherwise.

### GetBusinessSegmentsOk

`func (o *BusinessSegmentsDetails) GetBusinessSegmentsOk() (*[]BusinessSegmentType, bool)`

GetBusinessSegmentsOk returns a tuple with the BusinessSegments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessSegments

`func (o *BusinessSegmentsDetails) SetBusinessSegments(v []BusinessSegmentType)`

SetBusinessSegments sets BusinessSegments field to given value.

### HasBusinessSegments

`func (o *BusinessSegmentsDetails) HasBusinessSegments() bool`

HasBusinessSegments returns a boolean if a field has been set.

### GetLinks

`func (o *BusinessSegmentsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BusinessSegmentsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BusinessSegmentsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BusinessSegmentsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BusinessSegmentsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BusinessSegmentsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BusinessSegmentsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BusinessSegmentsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


