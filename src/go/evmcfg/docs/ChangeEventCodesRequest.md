# ChangeEventCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventCodes** | Pointer to [**EventCodesType**](EventCodesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeEventCodesRequest

`func NewChangeEventCodesRequest() *ChangeEventCodesRequest`

NewChangeEventCodesRequest instantiates a new ChangeEventCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeEventCodesRequestWithDefaults

`func NewChangeEventCodesRequestWithDefaults() *ChangeEventCodesRequest`

NewChangeEventCodesRequestWithDefaults instantiates a new ChangeEventCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventCodes

`func (o *ChangeEventCodesRequest) GetEventCodes() EventCodesType`

GetEventCodes returns the EventCodes field if non-nil, zero value otherwise.

### GetEventCodesOk

`func (o *ChangeEventCodesRequest) GetEventCodesOk() (*EventCodesType, bool)`

GetEventCodesOk returns a tuple with the EventCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventCodes

`func (o *ChangeEventCodesRequest) SetEventCodes(v EventCodesType)`

SetEventCodes sets EventCodes field to given value.

### HasEventCodes

`func (o *ChangeEventCodesRequest) HasEventCodes() bool`

HasEventCodes returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeEventCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeEventCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeEventCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeEventCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeEventCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeEventCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeEventCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeEventCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


