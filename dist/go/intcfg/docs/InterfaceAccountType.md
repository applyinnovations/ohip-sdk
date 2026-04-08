# InterfaceAccountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code of the Interface Account. | [optional] 
**Logo** | Pointer to **string** | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. | [optional] 
**PostingAccount** | Pointer to [**PostingAccountType**](PostingAccountType.md) |  | [optional] 

## Methods

### NewInterfaceAccountType

`func NewInterfaceAccountType() *InterfaceAccountType`

NewInterfaceAccountType instantiates a new InterfaceAccountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceAccountTypeWithDefaults

`func NewInterfaceAccountTypeWithDefaults() *InterfaceAccountType`

NewInterfaceAccountTypeWithDefaults instantiates a new InterfaceAccountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *InterfaceAccountType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *InterfaceAccountType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *InterfaceAccountType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *InterfaceAccountType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLogo

`func (o *InterfaceAccountType) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *InterfaceAccountType) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *InterfaceAccountType) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *InterfaceAccountType) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetPostingAccount

`func (o *InterfaceAccountType) GetPostingAccount() PostingAccountType`

GetPostingAccount returns the PostingAccount field if non-nil, zero value otherwise.

### GetPostingAccountOk

`func (o *InterfaceAccountType) GetPostingAccountOk() (*PostingAccountType, bool)`

GetPostingAccountOk returns a tuple with the PostingAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingAccount

`func (o *InterfaceAccountType) SetPostingAccount(v PostingAccountType)`

SetPostingAccount sets PostingAccount field to given value.

### HasPostingAccount

`func (o *InterfaceAccountType) HasPostingAccount() bool`

HasPostingAccount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


