# TraceTextsToBeFetched

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TraceTexts** | Pointer to [**[]TraceTextType**](TraceTextType.md) | Collection of trace texts. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTraceTextsToBeFetched

`func NewTraceTextsToBeFetched() *TraceTextsToBeFetched`

NewTraceTextsToBeFetched instantiates a new TraceTextsToBeFetched object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTraceTextsToBeFetchedWithDefaults

`func NewTraceTextsToBeFetchedWithDefaults() *TraceTextsToBeFetched`

NewTraceTextsToBeFetchedWithDefaults instantiates a new TraceTextsToBeFetched object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTraceTexts

`func (o *TraceTextsToBeFetched) GetTraceTexts() []TraceTextType`

GetTraceTexts returns the TraceTexts field if non-nil, zero value otherwise.

### GetTraceTextsOk

`func (o *TraceTextsToBeFetched) GetTraceTextsOk() (*[]TraceTextType, bool)`

GetTraceTextsOk returns a tuple with the TraceTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceTexts

`func (o *TraceTextsToBeFetched) SetTraceTexts(v []TraceTextType)`

SetTraceTexts sets TraceTexts field to given value.

### HasTraceTexts

`func (o *TraceTextsToBeFetched) HasTraceTexts() bool`

HasTraceTexts returns a boolean if a field has been set.

### GetLinks

`func (o *TraceTextsToBeFetched) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TraceTextsToBeFetched) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TraceTextsToBeFetched) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TraceTextsToBeFetched) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TraceTextsToBeFetched) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TraceTextsToBeFetched) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TraceTextsToBeFetched) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TraceTextsToBeFetched) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


