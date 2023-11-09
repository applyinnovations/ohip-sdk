# RegisterCall

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Call** | Pointer to [**CallType**](CallType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRegisterCall

`func NewRegisterCall() *RegisterCall`

NewRegisterCall instantiates a new RegisterCall object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegisterCallWithDefaults

`func NewRegisterCallWithDefaults() *RegisterCall`

NewRegisterCallWithDefaults instantiates a new RegisterCall object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCall

`func (o *RegisterCall) GetCall() CallType`

GetCall returns the Call field if non-nil, zero value otherwise.

### GetCallOk

`func (o *RegisterCall) GetCallOk() (*CallType, bool)`

GetCallOk returns a tuple with the Call field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCall

`func (o *RegisterCall) SetCall(v CallType)`

SetCall sets Call field to given value.

### HasCall

`func (o *RegisterCall) HasCall() bool`

HasCall returns a boolean if a field has been set.

### GetLinks

`func (o *RegisterCall) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RegisterCall) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RegisterCall) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RegisterCall) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RegisterCall) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RegisterCall) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RegisterCall) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RegisterCall) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


