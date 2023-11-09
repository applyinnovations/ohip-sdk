# SetCustomizedLetterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomizedLetterDetails** | Pointer to [**CustomizedLetterType**](CustomizedLetterType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewSetCustomizedLetterRequest

`func NewSetCustomizedLetterRequest() *SetCustomizedLetterRequest`

NewSetCustomizedLetterRequest instantiates a new SetCustomizedLetterRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetCustomizedLetterRequestWithDefaults

`func NewSetCustomizedLetterRequestWithDefaults() *SetCustomizedLetterRequest`

NewSetCustomizedLetterRequestWithDefaults instantiates a new SetCustomizedLetterRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomizedLetterDetails

`func (o *SetCustomizedLetterRequest) GetCustomizedLetterDetails() CustomizedLetterType`

GetCustomizedLetterDetails returns the CustomizedLetterDetails field if non-nil, zero value otherwise.

### GetCustomizedLetterDetailsOk

`func (o *SetCustomizedLetterRequest) GetCustomizedLetterDetailsOk() (*CustomizedLetterType, bool)`

GetCustomizedLetterDetailsOk returns a tuple with the CustomizedLetterDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomizedLetterDetails

`func (o *SetCustomizedLetterRequest) SetCustomizedLetterDetails(v CustomizedLetterType)`

SetCustomizedLetterDetails sets CustomizedLetterDetails field to given value.

### HasCustomizedLetterDetails

`func (o *SetCustomizedLetterRequest) HasCustomizedLetterDetails() bool`

HasCustomizedLetterDetails returns a boolean if a field has been set.

### GetLinks

`func (o *SetCustomizedLetterRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetCustomizedLetterRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetCustomizedLetterRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetCustomizedLetterRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SetCustomizedLetterRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetCustomizedLetterRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetCustomizedLetterRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetCustomizedLetterRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


