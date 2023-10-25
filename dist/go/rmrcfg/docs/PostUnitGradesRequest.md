# PostUnitGradesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**UnitGrades** | Pointer to [**[]RoomRotationUnitGradeType**](RoomRotationUnitGradeType.md) | Room Rotation Owner Room Grade Enumeration element. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostUnitGradesRequest

`func NewPostUnitGradesRequest() *PostUnitGradesRequest`

NewPostUnitGradesRequest instantiates a new PostUnitGradesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostUnitGradesRequestWithDefaults

`func NewPostUnitGradesRequestWithDefaults() *PostUnitGradesRequest`

NewPostUnitGradesRequestWithDefaults instantiates a new PostUnitGradesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostUnitGradesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostUnitGradesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostUnitGradesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostUnitGradesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUnitGrades

`func (o *PostUnitGradesRequest) GetUnitGrades() []RoomRotationUnitGradeType`

GetUnitGrades returns the UnitGrades field if non-nil, zero value otherwise.

### GetUnitGradesOk

`func (o *PostUnitGradesRequest) GetUnitGradesOk() (*[]RoomRotationUnitGradeType, bool)`

GetUnitGradesOk returns a tuple with the UnitGrades field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitGrades

`func (o *PostUnitGradesRequest) SetUnitGrades(v []RoomRotationUnitGradeType)`

SetUnitGrades sets UnitGrades field to given value.

### HasUnitGrades

`func (o *PostUnitGradesRequest) HasUnitGrades() bool`

HasUnitGrades returns a boolean if a field has been set.

### GetWarnings

`func (o *PostUnitGradesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostUnitGradesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostUnitGradesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostUnitGradesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


